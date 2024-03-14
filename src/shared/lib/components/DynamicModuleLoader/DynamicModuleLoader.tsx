import { type FC, type ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import type { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { type StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { type Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
};

type ReducersListEntry = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean
}
const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(reducerKey, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(reducerKey);
                });
            }
        };
    }, []);

    return (
        <>{children}</>
    );
};

export default DynamicModuleLoader;