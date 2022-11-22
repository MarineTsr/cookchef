import { useState, useEffect, useContext } from "react";
import RecipeSummary from "components/Recipe/RecipeSummary";
import SearchBar from "components/SearchBar";
import Loader from "components/Layout/Loader";
import ApiContext from "context/ApiContext";
import styles from "./Home.module.scss";

function Home() {
  const BASE_URL_API = useContext(ApiContext);
  const [recipeList, setRecipeList] = useState([]);
  const [filteredList, setFilteredList] = useState(recipeList);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching datas
  useEffect(() => {
    let ignoreResponse = false;

    const getRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL_API);

        if (response.ok && !ignoreResponse) {
          const recipes = await response.json();

          // Dyma server returns an array if > 1 todo, otherwise a document
          setRecipeList(Array.isArray ? recipes : [recipes]);
          setFilteredList(Array.isArray ? recipes : [recipes]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getRecipes();

    return () => {
      ignoreResponse = true;
    };
  }, [BASE_URL_API]);

  // Favorites
  const updateRecipe = async (item) => {
    try {
      const { _id, ...recipeRest } = item;
      const response = await fetch(`${BASE_URL_API}/${item._id}`, {
        method: "PATCH",
        body: JSON.stringify(recipeRest),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const recipe = await response.json();

        // Dyma server returns an array if > 1 todo, otherwise a document
        setRecipeList(
          recipeList.map((item) => (item._id === recipe._id ? recipe : item))
        );
        setFilteredList(
          recipeList.map((item) => (item._id === recipe._id ? recipe : item))
        );
      }
    } catch (e) {
      console.error(e);
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

        {isLoading ? (
          <Loader classes="mt-5 pt-5" />
        ) : (
          <ul className={`${styles.recipeList} row p-3 mt-5`}>
            {filteredList.length === 0 ? (
              <li className="col-12 text-center">
                Aucune recette ne correspond à votre recherche
              </li>
            ) : (
              filteredList.map((item) => (
                <li
                  key={item._id}
                  className="col-12 col-sm-6 col-md-4 col-xl-3"
                >
                  <RecipeSummary item={item} favoriteHandler={updateRecipe} />
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Home;
