import { type FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "entities/User/model/services/getUserData/getUserData";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import ErrorBoundary from "./providers/ErrorBoundary";
import { AppLayout } from "./AppLayout/AppLayout";
import "app/styles/index.scss";

export const App: FC = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        const AUTH = localStorage.getItem(LOCAL_STORAGE.AUTH);
        if (AUTH) {
            dispatch(getUserData());
        }
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <AppLayout />
        </ErrorBoundary>
    );
};
