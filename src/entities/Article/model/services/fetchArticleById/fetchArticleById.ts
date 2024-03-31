import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { type Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
    "profile/fetchProfileData",
    async (articleId, { rejectWithValue, dispatch, extra }) => {
        try {
            const response = await extra.api.get(`/articles/${articleId}`);

            return response.data;
        } catch (e) {
            const msg: string = e?.response?.data;

            return rejectWithValue(msg);
        }
    }
);