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

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    };

    const reduceManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reduceManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // @ts-expect-error
    store.reducerManager = reduceManager;

    return store;
}

export type AppDispatch = ThunkDispatch<StateSchema, any, UnknownAction>;