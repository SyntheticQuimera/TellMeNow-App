//layout
import LayoutBasic from "../layouts/LayoutBasic";

// Pages
import Home from "../pages/Home/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/",
    layout: LayoutBasic,
    element: Home,
    exact: true,
  },
  {
    path: "/:username",
    layout: LayoutBasic,
    element: User,
    exact: true,
  },
  {
    path: "/*",
    layout: LayoutBasic,
    element: Error404,
  },
];

export default routes;
