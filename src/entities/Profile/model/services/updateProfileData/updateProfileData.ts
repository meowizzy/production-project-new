import { createAsyncThunk } from "@reduxjs/toolkit";
import { type IProfile, type ValidateProfileError } from "../../types/profile";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidateProfileError[] | ValidateProfileError | string>>(
    "profile/updateProfileData",
    async (_, { rejectWithValue, extra, getState }) => {
        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }
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