import { useState, useContext } from "react";
import RecipeSummary from "components/Recipe/RecipeSummary";
import SearchBar from "components/SearchBar";
import Loader from "components/Layout/Loader";
import ApiContext from "context/ApiContext";
import styles from "./Home.module.scss";
import { useGetData } from "./../../hooks";

function Home() {
  const BASE_URL_API = useContext(ApiContext);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const RECIPE_LIST_JUMP = 8;
  const RECIPE_LIST_LENGHT = 40; // Fake value, to prevent fetching results without pagination - to be updated later

  // Fetching datas
  const [[recipeList, setRecipeList], isLoading] = useGetData(
    BASE_URL_API,
    page,
    RECIPE_LIST_JUMP
  );

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
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className={`${styles.mainContent} flex-fill`}>
      <div className="container">
        <h2 className="text-center mb-5 pb-3">
          Découvrez nos nouvelles recettes
        </h2>

        <SearchBar setFilter={setFilter} />

        {isLoading && !recipeList.length ? (
          <Loader classes="mt-5 pt-5" />
        ) : (
          <div className={`${styles.recipeList}`}>
            <ul className="row p-3 mt-5">
              {filter &&
              !recipeList.filter((item) =>
                item.title.toLowerCase().includes(filter)
              ).length ? (
                <li className="col-12 text-center">
                  Aucune recette ne correspond à votre recherche
                </li>
              ) : (
                recipeList
                  .filter((item) => item.title.toLowerCase().includes(filter))
                  .map((item) => (
                    <li
                      key={item._id}
                      className="col-12 col-sm-6 col-md-4 col-xl-3"
                    >
                      <RecipeSummary
                        item={item}
                        favoriteHandler={updateRecipe}
                      />
                    </li>
                  ))
              )}
            </ul>

            {recipeList.filter((item) =>
              item.title.toLowerCase().includes(filter)
            ).length &&
            page * RECIPE_LIST_JUMP <= RECIPE_LIST_LENGHT - RECIPE_LIST_JUMP ? (
              <div className="d-flex justify-content-center pb-5">
                <button
                  type="button"
                  className="btn btn--filled btn--primary"
                  onClick={() => setPage(page + 1)}
                >
                  Plus de recettes
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
