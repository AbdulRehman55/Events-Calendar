import * as React from "react";
import { useRoutes } from "react-router-dom";
import PublicLayout from "../layout/public";
import PublicRoute from "./public-route";
import { Login, Submit, HomePage, HelpPage } from "../screens";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <PublicRoute component={PublicLayout} />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "submit",
          element: <Submit />,
        },
        {
          path: "help",
          element: <HelpPage />,
        },
      ],
    },
  ]);
};
export default Routes;
