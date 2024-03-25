import React, { type FC, type ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { type StateSchema } from "../config/StateSchema";
import { type ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: ReactNode
    initialState?: Partial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}
export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props;
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
