import styles from "./Recipe.module.scss";
import recipeImg from "../assets/images/recipe.webp";

function Recipe() {
  return (
    <div className={`${styles.recipeItem__container}`}>
      <div className={`${styles.recipeItem__img}`}>
        <img src={recipeImg} alt="Oeuf cocotte d'Halloween" />
      </div>
	  <h3 className={`${styles.recipeItem__title} text-center p-5 mb-0`}>Oeuf cocotte d'Halloween</h3>
    </div>
  );
}

export default Recipe;
