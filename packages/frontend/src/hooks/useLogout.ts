import { trpcReact } from "../App";

export default function useLogout() {
  const context = trpcReact.useContext();

  return trpcReact.auth.logout.useMutation({
    onSuccess: () => {
      context.users.me.invalidate();
    },
  });
}
