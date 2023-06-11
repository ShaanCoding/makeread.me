import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/Default";
import Landing from "./pages/Landing";
import DarkLightModeToggle from "./components/DarkLightModeToggle";
import Editor from "./features/Editor/pages/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/editor",
        element: <Editor />,
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
    <>
      <RouterProvider router={router} />
      <DarkLightModeToggle />
    </>
  );
}
