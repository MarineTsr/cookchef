import styles from "./RecipeSummary.module.scss";

function RecipeSummary({ item, favoriteHandler }) {
  return (
    <div className={`${styles.recipeItem__container}`}>
      <div className={`${styles.recipeItem__img}`}>
        <button
          className={`${styles.recipeItem__favorite} btn btn--filled ${
            item.isFavorite ? "btn--primaryReverse" : "btn--primary"
          }`}
          onClick={() => {
            favoriteHandler({ ...item, isFavorite: !item.isFavorite });
          }}
        >
          <i className="icon fa-solid fa-heart"></i>
        </button>
        <img src={item.image} alt={item.title} />
      </div>
      <h3 className={`${styles.recipeItem__title} text-center p-5 mb-0`}>
        {item.title}
      </h3>
    </div>
  );
}

export default RecipeSummary;
