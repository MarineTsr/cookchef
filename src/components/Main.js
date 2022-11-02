import { useState } from "react";
import Recipe from "./Recipe";
import styles from "./Main.module.scss";
import { data } from "../data/recipes";

function Main() {
  const recipeList = data;
  const [favoriteList, setFavoriteList] = useState([]);

  // Debug
  console.log(favoriteList);

  const handleFavorite = (id) => {
    // 1st, check if recipe already exists in favorites list
    const alreadyFavorite = favoriteList.some((item) => item.id === id);

    if (alreadyFavorite) {
      // 2nd, if already exists, remove it from the favorites list
      setFavoriteList(favoriteList.filter((item) => item.id !== id));
    } else {
      // 3rd, if doesn't already exists, add it to the favorites list
      const newFavorite = recipeList.filter((item) => item.id === id);
      setFavoriteList([...favoriteList, newFavorite[0]]);
    }
  };

  return (
    <main className={`${styles.mainContent} flex-fill`}>
      <div className="container">
        <h2 className="text-center mb-5 pb-3">
          Découvrez nos nouvelles recettes
        </h2>
        <ul className={`${styles.recipeList} row p-3`}>
          {recipeList.map((item) => (
            <li key={item.id} className="col-12 col-sm-6 col-md-4 col-xl-3">
              <Recipe
                id={item.id}
                title={item.title}
                image={item.image}
                favoriteHandler={handleFavorite}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
