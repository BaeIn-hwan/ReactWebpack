import { RouteObject } from "react-router-dom";

import SampleIndex from "@/pages/Sample";

const sampleRoute: RouteObject[] = [
  {
    path: "sample",
    element: <SampleIndex />,
  },
];

export default sampleRoute;
