import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User, type UserSchema } from "../types/user";
import { fetchUserData } from "../services/getUserData/fetchUserData";
import { LOCAL_STORAGE } from "shared/const/localstorage";

const initialState: UserSchema = {
    authData: undefined,
    isLoading: false,
    error: undefined
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        removeAuthData: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_STORAGE.AUTH);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authData = action.payload;
            });
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;