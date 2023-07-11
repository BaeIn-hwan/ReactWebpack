import { RouteObject } from "react-router-dom";

import DefaultRoute from "@/routes/modules/_default";
import SampleRoute from "@/routes/modules/_sample";

const routes: RouteObject[] = [...DefaultRoute, ...SampleRoute];

export default routes;
