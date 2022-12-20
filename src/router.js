import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const Error = lazy(() => import("components/Layout/Error"));
const Home = lazy(() => import("pages/Home"));
const Admin = lazy(() => import("pages/Admin"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        errorElement: <Error />,
        element: <Home />,
      },
      {
        path: "admin",
        errorElement: <Error />,
        element: <Admin />,
      },
    ],
  },
]);
