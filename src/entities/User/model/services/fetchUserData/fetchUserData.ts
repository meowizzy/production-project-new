import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { type User } from "entities/User";
import { type AUTH_DATA, type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";

export const fetchUserData = createAsyncThunk<User, void, ThunkConfig>(
    "user/fetchUserData",
    async (_, { rejectWithValue, dispatch, getState, extra }) => {
        const auth: AUTH_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE.AUTH)!);

        if (auth) {
            try {
                const response = await extra.api.get(`/users/${auth?.id}`);

                const { password, ...userData } = response.data;

                return userData;
            } catch (e) {
                const msg: string = e.response.data;

                return rejectWithValue(msg);
            }
        }
    }
);