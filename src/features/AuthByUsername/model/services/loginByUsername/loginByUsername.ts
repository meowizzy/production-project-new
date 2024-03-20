import { createAsyncThunk } from "@reduxjs/toolkit";
import { type User, userActions } from "entities/User";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { type ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
interface LoginByUsernameProps {
    email: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
    "login/loginByUsername",
    async (authData, { rejectWithValue, dispatch, extra }) => {
        try {
            const response = await extra.api.post("/login", authData);

            dispatch(userActions.setAuthData(response.data.user));

            const userData = JSON.stringify({
                id: response.data.user.id,
                token: response.data.accessToken
            });

            localStorage.setItem(LOCAL_STORAGE.AUTH, userData);

            return response.data.user;
        } catch (err) {
            const msg: string = err?.response?.data;

            return rejectWithValue(msg);
        }
    }
);