import { type StateSchema } from "app/providers/StoreProvider";
import { type Article } from "entities/Article";

export const getArticleDetailsData = (state: StateSchema): Article | undefined => state.articleDetails?.data;
export const getArticleDetailsError = (state: StateSchema): string | undefined => state.articleDetails?.error;
export const getArticleDetailsIsLoading = (state: StateSchema): boolean | undefined => state.articleDetails?.isLoading;