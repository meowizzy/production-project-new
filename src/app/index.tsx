import { type FC } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import cn from "classnames";
import "app/styles/index.scss";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { Sidebar } from "widgets/Sidebar";
import ErrorBoundary from "app/providers/ErrorBoundary";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <ErrorBoundary>
            <div className={cn("App", theme)}>
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
