import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe({ id, title, image, favoriteHandler }) {
  // Favorite state of the recipe
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.recipeItem__container}`}>
      <div className={`${styles.recipeItem__img}`}>
        <button
          className={`${styles.recipeItem__favorite} btn btn--filled ${
            isActive ? "btn--primaryReverse" : "btn--primary"
          }`}
          onClick={() => {
            setIsActive(!isActive);
            favoriteHandler(id);
          }}
        >
          <i className="icon fa-solid fa-heart"></i>
        </button>
        <img src={image} alt={title} />
      </div>
      <h3 className={`${styles.recipeItem__title} text-center p-5 mb-0`}>
        {title}
      </h3>
    </div>
  );
}

export default Recipe;
