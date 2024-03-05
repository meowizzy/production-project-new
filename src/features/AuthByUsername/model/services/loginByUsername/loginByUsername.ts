import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User } from "entities/User";

interface LoginByUsernameProps {
    email: string;
    password: string;
}

interface ThunkConfig {
    rejectValue: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:3001/login", authData);

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            const msg: string = e.message;

            thunkAPI.rejectWithValue(msg);
        }
    }
);