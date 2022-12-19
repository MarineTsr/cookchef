import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);
