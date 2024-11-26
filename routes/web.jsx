import { createBrowserRouter } from "react-router-dom";
import Login from "../src/Login";
import Home from "../src/views/Home";
import Test from "../src/views/Test";
import Settings from "../src/views/Settings";
import NotFound from "../src/components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/results",
    element: <Home />,
  },
  {
    path: "/tips",
    element: <Home />,
  },
  {
    path: "/faqs",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
