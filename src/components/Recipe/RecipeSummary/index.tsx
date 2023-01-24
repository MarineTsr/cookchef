import styles from "./RecipeSummary.module.scss";
import {RecipeInterface} from "interfaces";
import {MouseEvent} from "react";

function RecipeSummary({
                           item,
                           favoriteHandler,
                           deleteHandler
                       }: { item: RecipeInterface, favoriteHandler: (item: RecipeInterface, event: MouseEvent) => void, deleteHandler: (item: RecipeInterface, event: MouseEvent) => void }) {
    return (
        <div className={`${styles.recipeItem__container}`}>
            <div className={`${styles.recipeItem__img}`}>
                <button
                    className={`${styles.recipeItem__favorite} btn btn--filled ${
                        item.isFavorite ? "btn--primary" : "btn--primaryReverse"
                    }`}
                    onClick={(event) => {
                        favoriteHandler({...item, isFavorite: !item.isFavorite}, event);
                    }}
                >
                    <i className="icon fa-solid fa-heart"></i>
                </button>
                <button
                    className={`${styles.recipeItem__delete} btn btn--filled btn--light`}
                    onClick={(event) => {
                        deleteHandler(item, event);
                    }}
                >
                    <i className="icon fa-solid fa-xmark"></i>
                </button>
                <img src={item.image} alt={item.title}/>
            </div>
            <h3 className={`${styles.recipeItem__title} text-center p-5 mb-0`}>
                {item.title}
            </h3>
        </div>
    );
}

export default RecipeSummary;
