import {useState, useEffect} from "react";
import {getRecipes} from "api";
import {useSetRecoilState} from "recoil";
import {recipesListState} from "state";
import {RecipeInterface} from "interfaces";

export const useGetRecipes = (pagination?: number, jump?: number): [boolean] => {
    const setRecipes = useSetRecoilState(recipesListState);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignoreResponse = false;

        const getRecipesList = async () => {
            try {
                const urlParams = new URLSearchParams();
                urlParams.append("sort", "createdAt:desc");

                if (pagination && jump) {
                    urlParams.append("skip", `${(pagination - 1) * jump}`);
                    urlParams.append("limit", `${jump}`);
                }

                const recipesList = await getRecipes(urlParams);
                if (!ignoreResponse) {
                    if (pagination && pagination !== 1) {
                        setRecipes((old: RecipeInterface[]) => [...old, ...recipesList]);
                    } else {
                        setRecipes(recipesList);
                    }
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
    }, [setRecipes, pagination, jump]);

    return [isLoading];
};
