import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { type User, userActions } from "entities/User";

interface ThunkConfig {
    rejectValue: string;
}
export const getUserData = createAsyncThunk<User, void, ThunkConfig>(
    "user/getUserData",
    async (_, { rejectWithValue, dispatch }) => {
        const USER_ID = localStorage.getItem(LOCAL_STORAGE.USER_ID);
        const AUTH_TOKEN = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);

        try {
            const response = await axios.get(`http://localhost:3001/users/${USER_ID}`, {
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`
                }
            });

            const { email, id } = response.data;
            dispatch(userActions.setAuthData({ email, id }));

            return { email, id };
        } catch (e) {
            const msg: string = e.response.data;

            return rejectWithValue(msg);
        }
    }
);