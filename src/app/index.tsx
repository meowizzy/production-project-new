import { type FC, useEffect } from "react";
import { AppRouter } from "app/providers/router";
import { fetchUserData } from "entities/User/model/services/getUserData/fetchUserData";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import "app/styles/index.scss";

export const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <AppRouter />
    );
};
