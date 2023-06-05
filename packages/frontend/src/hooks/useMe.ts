import { trpcReact } from "../App";

export default function useMe() {
  const context = trpcReact.useContext();

  return trpcReact.users.me.useQuery();
}
