import { configureStore, type EnhancedStore } from "@reduxjs/toolkit";
// @ts-expect-error
import { type StateSchema } from "./StateSchema";

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
    return configureStore<StateSchema>({
        reducer: {

        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}