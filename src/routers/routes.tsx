import { RouteObject } from "react-router-dom";

import Main from "@/pages/main";
import { RoutesString } from "@/routers/routesString";

export const routes: RouteObject[] = [
  {
    path: RoutesString.Main,
    element: <Main />,
  },

];
