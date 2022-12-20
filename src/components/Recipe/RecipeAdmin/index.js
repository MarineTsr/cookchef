import styles from "./RecipeAdmin.module.scss";

function RecipeAdmin({ recipe }) {
  return (
    <div className={`${styles.recipeAdmin__container}`}>
      <p>{recipe.title}</p>
      <div className={`${styles.recipeAdmin__actions}`}>
        <button className="btn btn--filled btn--dark ml-3" title="Modifier">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="btn btn--outlined btn--dark ml-3" title="Supprimer">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default RecipeAdmin;
