import { useState, useEffect } from "react";
import { getRecipes } from "api";

export const useGetRecipes = (pagination, jump) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignoreResponse = false;

    const getRecipesList = async () => {
      try {
        const urlParams = new URLSearchParams();
        urlParams.append("sort", "createdAt:desc");

        if (pagination && jump) {
          urlParams.append("skip", (pagination - 1) * jump);
          urlParams.append("limit", jump);
        }

        const recipesList = await getRecipes(urlParams);
        if (!ignoreResponse) {
          setRecipes((current) => [...current, ...recipesList]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getRecipesList();

    return () => {
      ignoreResponse = true;
    };
  }, [pagination, jump]);

  return [[recipes, setRecipes], isLoading];
};
