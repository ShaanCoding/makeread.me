import localStrategy from "./strategies/local.strategy";
import { User } from "@prisma/client";

import path from "path";
import fastifyPassport from "@fastify/passport";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import prisma from "./services/prisma.service";

import fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

import { env } from "./utils";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { AppRouter, appRouter } from "./routers/root.router";
import { createContext } from "./trpc/context";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { renderTrpcPanel } from "trpc-panel";
// Load environment variables
config();

// Get the root folder of the project
const root = path.join(fileURLToPath(import.meta.url), "../..");

// Get the public folder where the client is
const publicRoot = path.join(root, "public");

// declare the server
const server = fastify({
  maxParamLength: 5000,
});

// Register nice error messages
await server.register(await import("@fastify/sensible"));

await server.register(await import("@fastify/cookie"));

// Setup Session
await server.register(await import("@fastify/session"), {
  cookieName: "sessionid",
  secret: env.getOrThrow<string>("SESSION_SECRET"),
  cookie: {
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
  },
});

// Serve Static Files (Client)
await server.register(await import("@fastify/static"), {
  root: publicRoot,
  wildcard: false,
});

// Initialise Passport for Authentication
await server.register(fastifyPassport.initialize());
await server.register(fastifyPassport.secureSession());

// Register the local strategy (username and password) login
fastifyPassport.use("local", localStrategy);

// This is used to serialize the user into the session e.g. get userId and put it in the session
fastifyPassport.registerUserSerializer(
  async (user: Omit<User, "password">, request) => user.userId
);

// This is used to deserialize the user from the session e.g. get userId from session and get user from database
fastifyPassport.registerUserDeserializer(async (userId: string, request) => {
  const { password, ...user } = await prisma.user.findUniqueOrThrow({
    where: { userId },
  });
  return user;
});

await server.register(fastifyTRPCPlugin, {
  prefix: "/api/trpc",
  trpcOptions: { router: appRouter, createContext },
});

server.route({
  method: "GET",
  url: "/api/docs",
  handler: (req, res) => {
    // html header
    return res
      .headers({
        "Content-Type": "text/html",
      })
      .send(
        renderTrpcPanel(appRouter, {
          url: "/api/trpc",
          transformer: "superjson",
        })
      );

    // return res.header("Content-Type", "application/html")
  },
});

// If there's no route, send the index.html file
await server.setNotFoundHandler((req, res) => {
  res.sendFile("index.html");
});

await prisma.$connect();

// Set the server to listen on port 3000
await server.listen({ port: 3000, host: "0.0.0.0" });

process.send?.("ready");

// Log the server address
console.log(
  `Server listening on ${server
    .addresses()
    .map(
      (address) =>
        `\r\n ${address.family} - http://${address.address}:${address.port}`
    )
    .join("\n")}`
);

export { type AppRouter } from "./routers/root.router";

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
