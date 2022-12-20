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

export const getRecipe = async (_id) => {
  const response = await fetch(`${RECIPE_URL_API}/${_id}`);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Fetching recipe #${_id} failed.`);
  }
};

export const deleteRecipe = async (_id) => {
  const response = await fetch(`${RECIPE_URL_API}/${_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return true;
  } else {
    throw new Error(`Deleting recipe #${_id} failed.`);
  }
};

export const updateRecipe = async (recipe) => {
  const { _id, ...recipeRest } = recipe;
  const response = await fetch(`${RECIPE_URL_API}/${_id}`, {
    method: "PATCH",
    body: JSON.stringify(recipeRest),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Updating recipe #${_id} failed.`);
  }
};

export const createRecipe = async (recipe) => {
  const response = await fetch(RECIPE_URL_API, {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Creating recipe failed.`);
  }
};
