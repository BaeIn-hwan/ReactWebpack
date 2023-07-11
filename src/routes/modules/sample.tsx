import { RouteObject } from "react-router-dom";

import SampleIndex from "@/pages/Sample";
import TagIndex from "@/pages/Sample/Tag";

const sampleRoute: RouteObject[] = [
  {
    path: "sample",
    element: <SampleIndex />,
    children: [
      {
        path: "tag",
        element: <TagIndex />,
      },
    ],
  },
];

export default sampleRoute;
