import { RouteObject } from "react-router-dom";

import DefaultLayout from "@/layouts/DefaultLayout";
import MainIndex from "@/pages/Main";

const defaultRoute: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MainIndex />,
        index: true,
      },
    ],
  },
];

export default defaultRoute;
