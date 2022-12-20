import styles from "./AdminRecipesList.module.scss";
import { useGetRecipes } from "hooks";
import RecipeAdmin from "components/Recipe/RecipeAdmin/index";

function AdminRecipesList() {
  const [[recipes, setRecipes]] = useGetRecipes();

  return (
    <div className={`${styles.adminRecipesList} flex-fill`}>
      <h3>Liste des recettes</h3>

      {recipes && (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={recipe._id + index} className="my-3">
              <RecipeAdmin
                recipe={recipe}
                recipes={recipes}
                setRecipes={setRecipes}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminRecipesList;
