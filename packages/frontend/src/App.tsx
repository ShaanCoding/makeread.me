import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "./layouts/Default";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import profileLoader from "./loaders/profileLoader";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CreateInventory from "./features/IoTDeviceCatalogue/pages/CreateInventory";
import ManageInventory from "./features/IoTDeviceCatalogue/pages/ManageInventory";
import EditInventory from "./features/IoTDeviceCatalogue/pages/EditInventory";
import DarkLightModeToggle from "./components/DarkLightModeToggle";
import staffLoader from "./loaders/staffLoader";
import UserManagement from "./features/UserManagement/pages/UserManagement";
import StaffDashboard from "./pages/StaffDashboard";
import CustomerManagement from "./features/CustomerDetailManagement(Staff)/pages/CustomersDetailPage";
import CustomerManagementEdit from "./features/CustomerDetailManagement(Staff)/pages/CustomersEditPage";
import type { AppRouter } from "backend/src/routers/root.router";
import {
  createTRPCProxyClient,
  createTRPCReact,
  httpBatchLink,
} from "@trpc/react-query";
import SuperJSON from "superjson";
import BrowseInventory from "./features/IoTPublicCatalogue/pages/BrowseInventory";
import StaffManagement from "./features/StaffManagement/pages/StaffManagement";
import CreateStaff from "./features/StaffManagement/pages/CreateStaff";

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
