import { atom, selectorFamily } from "recoil";
import { getRecipe } from "api";

// Recipes list
export const recipesListState = atom({
  key: "recipesListState",
  default: [],
});

// Filtered recipes list
export const filteredRecipesSelector = selectorFamily({
  key: "filteredRecipesSelector",
  get:
    (filter) =>
    ({ get }) => {
      const recipes = get(recipesListState);
      return !!filter
        ? recipes.filter((item) => item.title.toLowerCase().includes(filter))
        : recipes;
    },
});

// Recipe by id
export const recipeItemSelector = selectorFamily({
  key: "recipeItemSelector",
  get:
    (_id) =>
    async ({ get }) => {
      return _id && (await getRecipe(_id));
    },
});
