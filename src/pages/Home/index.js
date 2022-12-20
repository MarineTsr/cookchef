import { useState } from "react";
import SearchBar from "components/SearchBar";
import Loader from "components/Layout/Loader";
import RecipeSummary from "components/Recipe/RecipeSummary";
import { useGetRecipes } from "hooks";
import {
  updateRecipe as apiUpdateRecipe,
  deleteRecipe as apiDeleteRecipe,
} from "api";
import styles from "./Home.module.scss";

function Home() {
  const [pagination, setPagination] = useState(1);
  const [filter, setFilter] = useState("");
  const RECIPE_LIST_JUMP = 8;
  const RECIPE_LIST_LENGHT = 40; // Fake value, to prevent fetching results without pagination - to be updated later

  // Fetching datas
  const [[recipeList, setRecipeList], isLoading] = useGetRecipes(
    pagination,
    RECIPE_LIST_JUMP
  );

  // Favorites
  const updateRecipe = async (item, event) => {
    event.stopPropagation();

    const recipe = await apiUpdateRecipe(item);

    setRecipeList(
      recipeList.map((item) => (item._id === recipe._id ? recipe : item))
    );
  };

  // Deletion
  const deleteRecipe = async (item, event) => {
    event.stopPropagation();

    await apiDeleteRecipe(item._id);

    setRecipeList(
      recipeList.filter((currentItem) => currentItem._id !== item._id)
    );
  };

  return (
    <main className={`main-content flex-fill`}>
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
                        deleteHandler={deleteRecipe}
                      />
                    </li>
                  ))
              )}
            </ul>

            {recipeList.filter((item) =>
              item.title.toLowerCase().includes(filter)
            ).length &&
            pagination * RECIPE_LIST_JUMP <=
              RECIPE_LIST_LENGHT - RECIPE_LIST_JUMP ? (
              <div className="d-flex justify-content-center pb-5">
                <button
                  type="button"
                  className="btn btn--filled btn--primary"
                  onClick={() => setPagination(pagination + 1)}
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
