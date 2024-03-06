import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User, type UserSchema } from "../types/user";
import { getUserData } from "../services/getUserData/getUserData";

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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserData.rejected, (state, action) => {
                // @ts-expect-error
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