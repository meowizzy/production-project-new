import { createAsyncThunk } from "@reduxjs/toolkit";
import { type IProfile } from "../../types/profile";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { getProfileForm } from "entities/Profile";

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig>(
    "profile/updateProfileData",
    async (_, { rejectWithValue, extra, getState }) => {
        const formData = getProfileForm(getState());
        try {
            const { id } = JSON.parse(localStorage.getItem(LOCAL_STORAGE.AUTH)!);
            const response = await extra.api.put(`/profile/${id}`, formData);

            return response.data;
        } catch (e) {
            const msg: string = e?.response?.data;

            return rejectWithValue(msg);
        }
    }
);