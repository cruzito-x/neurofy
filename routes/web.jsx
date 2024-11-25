import { createBrowserRouter } from "react-router-dom";
import Login from "../src/Login";
import Home from "../src/views/Home";
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
    element: <Home />,
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
    element: <Home />,
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
