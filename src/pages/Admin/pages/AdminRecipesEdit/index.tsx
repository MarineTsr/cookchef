import styles from "./AdminRecipesEdit.module.scss";
import RecipeForm from "components/Recipe/RecipeForm";

function AdminRecipesEdit() {
  return (
    <div className={`${styles.adminRecipesEdit} flex-fill`}>
      <h3>Edition d'une recette</h3>

      <RecipeForm />
    </div>
  );
}

export default AdminRecipesEdit;
