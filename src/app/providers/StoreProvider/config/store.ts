import {
    configureStore,
    type EnhancedStore,
    type ReducersMapObject,
    type ThunkDispatch,
    type UnknownAction
} from "@reduxjs/toolkit";
import { type StateSchema } from "../config/StateSchema";
import { counterReducer } from "entities/Counter/model/slice/counterSlice";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import type { To } from "@remix-run/router";
import type { NavigateOptions } from "react-router/dist/lib/context";

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
): EnhancedStore {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    };

    const reduceManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reduceManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    });

    // @ts-expect-error
    store.reducerManager = reduceManager;

    return store;
}

export type AppDispatch = ThunkDispatch<StateSchema, any, UnknownAction>;