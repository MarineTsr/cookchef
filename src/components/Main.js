import { useState } from "react";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import styles from "./Main.module.scss";
import { data } from "../data/recipes";

function Main() {
  const recipeList = data;
  const [favoriteList, setFavoriteList] = useState([]);
  const [filteredList, setFilteredList] = useState(recipeList);

  // Favorites
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

  // Search
  const handleInput = (event) => {
    const filter = event.target.value.trim().toLowerCase();

    if (filter.length >= 3) {
      setFilteredList(
        recipeList.filter((item) => item.title.toLowerCase().includes(filter))
      );
    } else {
      setFilteredList(recipeList);
    }
  };

  return (
    <main className={`${styles.mainContent} flex-fill`}>
      <div className="container">
        <h2 className="text-center mb-5 pb-3">
          Découvrez nos nouvelles recettes
        </h2>

        <SearchBar inputHandler={handleInput} />

        <ul className={`${styles.recipeList} row p-3 mt-5`}>
          {filteredList.length === 0 && (
            <li className="col-12 text-center">
              Aucune recette ne correspond à votre recherche
            </li>
          )}
          {filteredList.map((item) => (
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
