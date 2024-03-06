import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { type User, userActions } from "entities/User";

export const getUserData = createAsyncThunk(
    "user/getUserData",
    async (userData, { rejectWithValue, dispatch }) => {
        const USER_ID = localStorage.getItem(LOCAL_STORAGE.USER_ID);
        const AUTH_TOKEN = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);

        try {
            const response = await axios.get(`http://localhost:3001/users/${USER_ID}`, {
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`
                }
            });

            const filteredEntries = Object.entries(response.data).filter((item) => item[0] !== "password");
            // @ts-expect-error
            const newData: User = Object.fromEntries(filteredEntries);
            dispatch(userActions.setAuthData(newData));

            return response.data;
        } catch (e) {
            const msg: string = e.response.data;

            return rejectWithValue(msg);
        }
    }
);