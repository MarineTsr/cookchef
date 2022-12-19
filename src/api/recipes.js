const RECIPE_URL_API = "https://restapi.fr/api/CookChef";

export const getRecipes = async (params) => {
  const response = await fetch(
    `${RECIPE_URL_API}${params ? "?" + params : ""}`
  );

  if (response.ok) {
    const recipes = await response.json();
    return Array.isArray(recipes) ? recipes : [recipes];
  } else {
    throw new Error("Fetching recipes list failed.");
  }
};

export const getRecipe = async (_id) => {};

export const deleteRecipe = async (_id) => {};

export const updateRecipe = async (recipe) => {};

export const createRecipe = async (recipe) => {};
