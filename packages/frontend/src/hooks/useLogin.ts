import { trpcReact } from "../App";

export default function useLogin() {
  const context = trpcReact.useContext();
  return trpcReact.auth.login.useMutation({
    onSuccess: (data) => {
      context.users.me.setData(undefined, data);
    },
  });
}
