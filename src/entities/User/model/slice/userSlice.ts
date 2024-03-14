import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User, type UserSchema } from "../types/user";
import { getUserData } from "../services/getUserData/getUserData";
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
            .addCase(getUserData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getUserData.fulfilled, (state) => {
                state.isLoading = false;
            });
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;