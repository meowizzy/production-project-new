import { type CounterSchema } from "entities/Counter";
import { type UserSchema } from "entities/User";
import { type LoginSchema } from "features/AuthByUsername";
import { type EnhancedStore, type Reducer, type ReducersMapObject, type UnknownAction } from "@reduxjs/toolkit";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    loginForm?: LoginSchema;
}

export interface AUTH_DATA {
    id: string;
    token: string;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
