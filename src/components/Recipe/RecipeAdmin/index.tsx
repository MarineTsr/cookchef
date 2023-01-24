import styles from "./RecipeAdmin.module.scss";
import {deleteRecipe} from "api/recipes";
import {NavLink} from "react-router-dom";
import {RecipeInterface} from "interfaces";

function RecipeAdmin({
                         recipe,
                         recipes,
                         setRecipes
                     }: { recipe: RecipeInterface, recipes: RecipeInterface[], setRecipes: (items: RecipeInterface[]) => void }) {
    const deleteCurrentRecipe = async () => {
        const isDeleted = await deleteRecipe(recipe._id);
        if (isDeleted) {
            setRecipes(recipes.filter((item) => item._id !== recipe._id));
        }
    };

    return (
        <div className={`${styles.recipeAdmin__container}`}>
            <p>{recipe.title}</p>
            <div className={`${styles.recipeAdmin__actions} mb-4 mb-sm-0`}>
                <NavLink
                    to={`/admin/recettes/modifier/${recipe._id}`}
                    className="btn btn--filled btn--dark ml-3"
                    title="Modifier"
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </NavLink>
                <button
                    className="btn btn--outlined btn--dark ml-3"
                    title="Supprimer"
                    onClick={deleteCurrentRecipe}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default RecipeAdmin;
