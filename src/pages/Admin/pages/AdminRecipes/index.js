import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminRecipesNav from "./../../components/AdminRecipesNav/index";

function AdminRecipes() {
  return (
    <div className="d-flex flex-column h-100">
      <h2>Gestion des recettes</h2>
      <AdminRecipesNav />

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AdminRecipes;
