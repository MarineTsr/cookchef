import { useState, useEffect } from "react";

export const useGetData = (api, page, jump) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignoreResponse = false;

    const getData = async () => {
      try {
        const urlParams = new URLSearchParams();

        if (page && jump) {
          urlParams.append("skip", (page - 1) * jump);
          urlParams.append("limit", jump);
          urlParams.append("sort", "createdAt:asc");
        }

        const response = await fetch(
          `${api}${urlParams ? "?" + urlParams : ""}`
        );

        if (response.ok && !ignoreResponse) {
          const datas = await response.json();

          // Dyma server returns an array if > 1 recipe, otherwise a document
          // /!\ Use an arrow function in the setter to avoid infinite loop (if setRecipeList has not this func, then recipeList should been added to the dependances) /!\
          setData((current) =>
            Array.isArray(datas) ? [...current, ...datas] : [...current, datas]
          );
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      ignoreResponse = true;
    };
  }, [api, page, jump]);

  return [[data, setData], isLoading];
};
