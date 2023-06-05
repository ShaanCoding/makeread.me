// import { QueryClient } from "@tanstack/react-query";
// import { getQueryKey } from "@trpc/react-query";
// import { LoaderFunctionArgs, redirect } from "react-router-dom";
// import { trpcClient, trpcReact } from "../App";

// /**
//  * This loader is used to fetch the current user's profile data before the page is rendered.
//  * @returns null
//  */
// const profileLoader =
//   (queryClient: QueryClient) =>
//   async ({ request }: LoaderFunctionArgs) => {
//     const queryKey = getQueryKey(trpcReact.users.me);

//     if (!queryClient.getQueryData(queryKey)) {
//       const result = await queryClient.fetchQuery({
//         queryKey,
//         queryFn: () => trpcClient.users.me.query(),
//       });

//       if (!result) {
//         return redirect("/login");
//       }
//     }

//     return null;
//   };

// export default profileLoader;

// Need to expand backend before this will work
