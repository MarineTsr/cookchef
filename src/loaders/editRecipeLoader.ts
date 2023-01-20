import { getRecipe } from "api";

export const editRecipeLoader = async ({ params: { id } }) => {
  return getRecipe(id);
};
