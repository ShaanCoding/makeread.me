import { TRPCClientError } from "@trpc/client";
import { AppRouter } from "backend/src";

export function isTRPCClientError(
  cause: unknown
): cause is TRPCClientError<AppRouter> {
  return cause instanceof TRPCClientError;
}
