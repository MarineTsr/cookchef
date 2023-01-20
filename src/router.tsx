import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";

const Error = lazy(() => import("components/Layout/Error"));
const Home = lazy(() => import("pages/Home"));
const Admin = lazy(() => import("pages/Admin"));
const AdminRecipes = lazy(() => import("pages/Admin/pages/AdminRecipes"));
const AdminRecipesList = lazy(() =>
  import("pages/Admin/pages/AdminRecipesList")
);
const AdminRecipesEdit = lazy(() =>
  import("pages/Admin/pages/AdminRecipesEdit")
);
const AdminRecipesAdd = lazy(() => import("pages/Admin/pages/AdminRecipesAdd"));
const AdminUsers = lazy(() => import("pages/Admin/pages/AdminUsers"));

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
        children: [
          {
            index: true,
            loader: async () => redirect("recettes"),
          },
          {
            path: "recettes",
            element: <AdminRecipes />,
            children: [
              {
                index: true,
                loader: async () => redirect("liste"),
              },
              {
                path: "liste",
                element: <AdminRecipesList />,
              },
              {
                path: "ajouter",
                element: <AdminRecipesAdd />,
              },
              {
                path: "modifier/:id",
                element: <AdminRecipesEdit />,
              },
            ],
          },
          {
            path: "utilisateurs",
            element: <AdminUsers />,
          },
        ],
      },
    ],
  },
]);
