import {atom, selectorFamily, selector} from "recoil";
import {getRecipe} from "api";
import {RecipeInterface} from "interfaces";

// Recipes list
export const recipesListState = atom<RecipeInterface[]>({
    key: "recipesListState",
    default: [],
});

// Filtered recipes list
export const filteredRecipesSelector = selectorFamily({
    key: "filteredRecipesSelector",
    get:
        (filter: string) =>
            ({get}) => {
                const recipes = get(recipesListState);
                return !!filter
                    ? recipes.filter((item: RecipeInterface) => item.title.toLowerCase().includes(filter))
                    : recipes;
            },
});

// Recipe by id
export const recipeItemSelector = selectorFamily({
    key: "recipeItemSelector",
    get:
        (_id?: string) =>
            async () => {
                return _id && (await getRecipe(_id));
            },
});

// Recipes wishlist display
export const showWishlistState = atom({
    key: "showWishlistState",
    default: false,
});

// Wishlist recipes list
export const wishlistRecipesSelector = selector({
    key: "wishlistRecipesSelector",
    get: ({get}) => {
        const recipes = get(recipesListState);
        return recipes.filter((item: RecipeInterface) => item.isFavorite);
    },
});
