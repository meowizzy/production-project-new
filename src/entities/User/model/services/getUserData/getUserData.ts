import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { type User, userActions } from "entities/User";
import { type AUTH_DATA } from "app/providers/StoreProvider/config/StateSchema";

interface ThunkConfig {
    rejectValue: string;
}
export const getUserData = createAsyncThunk<User, void, ThunkConfig>(
    "user/getUserData",
    async (_, { rejectWithValue, dispatch, extra }) => {
        const AUTH: AUTH_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE.AUTH)!);

        try {
            // @ts-expect-error
            const response = await extra.api.get(`/users/${AUTH.id}`);

            const { password, ...userData } = response.data;
            dispatch(userActions.setAuthData(userData));

            return userData;
        } catch (e) {
            const msg: string = e.response.data;

            return rejectWithValue(msg);
        }
    }
);