import {getRecipe} from "api";

type LoaderParams = {
    params: {
        id: string
    }
}
export const editRecipeLoader = async ({params: {id}}: LoaderParams) => {
    return getRecipe(id);
};
