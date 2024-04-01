import { type FC, useEffect } from "react";
import { fetchUserData } from "entities/User/model/services/fetchUserData/fetchUserData";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import "app/styles/index.scss";
import { AppLayout } from "app/AppLayout/AppLayout";
import ErrorBoundary from "app/providers/ErrorBoundary";

export const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <AppLayout />
        </ErrorBoundary>
    );
};
