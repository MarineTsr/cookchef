import styles from "./AdminRecipesList.module.scss";
import { useGetRecipes } from "hooks";
import RecipeAdmin from "components/Recipe/RecipeAdmin/index";

function AdminRecipesList() {
  const [[recipeList]] = useGetRecipes();

  return (
    <div className={`${styles.adminRecipesList} flex-fill`}>
      <h3>Liste des recettes</h3>

      {recipeList && (
        <ul>
          {recipeList.map((recipe, index) => (
            <li key={recipe._id + index} className="my-3">
              <RecipeAdmin recipe={recipe} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminRecipesList;
