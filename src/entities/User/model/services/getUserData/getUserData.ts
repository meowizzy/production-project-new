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
    async (_, { rejectWithValue, dispatch }) => {
        const AUTH: AUTH_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE.AUTH)!);

        try {
            const response = await axios.get(`http://localhost:3001/users/${AUTH.id}`, {
                headers: {
                    Authorization: `Bearer ${AUTH.token}`
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