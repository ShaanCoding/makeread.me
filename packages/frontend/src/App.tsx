import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "./layouts/Default";
import Landing from "./pages/Landing";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DarkLightModeToggle from "./components/DarkLightModeToggle";
import type { AppRouter } from "backend/src/routers/root.router";
import {
  createTRPCProxyClient,
  createTRPCReact,
  httpBatchLink,
} from "@trpc/react-query";
import SuperJSON from "superjson";

const queryClient = new QueryClient();

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      // You can pass any HTTP headers you wish here
    }),
  ],
  transformer: SuperJSON,
});

export const trpcReact = createTRPCReact<AppRouter>();

export const client = trpcReact.createClient({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      // You can pass any HTTP headers you wish here
    }),
  ],
  transformer: SuperJSON,
});

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      // {
      //   path: "staff",
      //   loader: staffLoader(queryClient),
      //   children: [
      //     {
      //       index: true,
      //       element: <StaffDashboard />,
      //     },
      //     {
      //       path: "inventory",
      //       children: [
      //         { index: true, element: <ManageInventory /> },
      //         {
      //           path: "create",
      //           element: <CreateInventory />,
      //         },
      //         {
      //           path: "edit/:id",
      //           element: <EditInventory />,
      //         },
      //       ],
      //     },
      //     {
      //       path: "users",
      //       element: <UserManagement />,
      //     },
    ],
  },
]);

export default function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <trpcReact.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        {showDevtools && (
          <React.Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
          </React.Suspense>
        )}

        <DarkLightModeToggle />
      </QueryClientProvider>
    </trpcReact.Provider>
  );
}
