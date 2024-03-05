import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User, userActions } from "entities/User";
import { LOCAL_STORAGE } from "shared/const/localstorage";
interface LoginByUsernameProps {
    email: string;
    password: string;
}

interface ThunkConfig {
    rejectValue: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
    "login/loginByUsername",
    async (authData, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post("http://localhost:3001/login", authData);

            dispatch(userActions.setAuthData(response.data.user));

            localStorage.setItem(LOCAL_STORAGE.AUTH_TOKEN, response.data.accessToken);
            localStorage.setItem(LOCAL_STORAGE.USER_ID, response.data.user.id);

            return response.data.user;
        } catch (err) {
            const msg: string = err?.response?.data;

            return rejectWithValue(msg);
        }
    }
);