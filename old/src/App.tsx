import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/Default";
import Landing from "./pages/Landing";
import DarkLightModeToggle from "./components/DarkLightModeToggle";
import Editor from "./features/Editor/pages/Editor";
import ChooseTemplate from "./features/ChooseTemplate/page/ChooseTemplate";

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
        path: "/choose-template",
        element: <ChooseTemplate />,
      },
      {
        path: "/editor/:templateId",
        element: <Editor />,
      },
    ],
  },
]);

export default function App() {
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
