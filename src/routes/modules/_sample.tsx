import { RouteObject } from "react-router-dom";

import SampleIndex from "@/pages/Sample";
import SampleTag from "@/pages/Sample/Tag";

const sampleRoute: RouteObject[] = [
  {
    path: "sample",
    element: <SampleIndex />,
    children: [
      {
        path: "tag",
        element: <SampleTag />,
      },
    ],
  },
];

export default sampleRoute;
