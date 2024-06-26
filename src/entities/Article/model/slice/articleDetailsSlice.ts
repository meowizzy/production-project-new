import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { type Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
};
export const articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            });
    }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducers } = articleDetailsSlice;