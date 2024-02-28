import { configureStore, type EnhancedStore } from "@reduxjs/toolkit";
import { type StateSchema } from "../config/StateSchema";
import { counterReducer } from "entities/Counter/model/slice/counterSlice";

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}