import { useMutation, useQueryClient } from "@tanstack/react-query";
import { trpcReact } from "../App";

export default function useRegister() {
  const queryClient = useQueryClient();
  const context = trpcReact.useContext();
  return trpcReact.auth.register.useMutation({
    onSuccess: () => {
      context.users.me.invalidate();
    },
  });
}
