import styles from "./AdminRecipesAdd.module.scss";
import RecipeForm from "components/Recipe/RecipeForm";

function AdminRecipesAdd() {
  return (
    <div className={`${styles.adminRecipesAdd} flex-fill`}>
      <h3>Ajouter une recette</h3>

      <RecipeForm />
    </div>
  );
}

export default AdminRecipesAdd;
