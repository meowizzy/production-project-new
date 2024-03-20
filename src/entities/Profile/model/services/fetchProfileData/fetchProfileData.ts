import { createAsyncThunk } from "@reduxjs/toolkit";
import { type IProfile } from "../../types/profile";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { LOCAL_STORAGE } from "shared/const/localstorage";

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig>(
    "profile/fetchProfileData",
    async (_, { rejectWithValue, dispatch, extra }) => {
        try {
            const { id } = JSON.parse(localStorage.getItem(LOCAL_STORAGE.AUTH)!);
            const response = await extra.api.get(`/profile/${id}`);

            return response.data;
        } catch (e) {
            const msg: string = e?.response?.data;

            return rejectWithValue(msg);
        }
    }
);