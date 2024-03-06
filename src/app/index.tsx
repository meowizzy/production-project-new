import { type FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import cn from "classnames";
import "app/styles/index.scss";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { Sidebar } from "widgets/Sidebar";
import ErrorBoundary from "app/providers/ErrorBoundary";
import { useDispatch } from "react-redux";
import { getUserData } from "entities/User/model/services/getUserData/getUserData";
import { LOCAL_STORAGE } from "shared/const/localstorage";

export const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const AUTH_TOKEN = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);
        if (AUTH_TOKEN) {
            // @ts-expect-error
            dispatch(getUserData());
        }
    }, [dispatch]);

    return (
        <ErrorBoundary>
            <div className={cn("App")}>
                <Navbar/>
                <div className="app-content-outer">
                    <Sidebar />
                    <main role="main" className="app-content">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </ErrorBoundary>
    );
};
