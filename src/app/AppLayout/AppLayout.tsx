import { type FC } from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Outlet } from "react-router-dom";
import cn from "classnames";

export const AppLayout: FC = () => {
    return (
        <div className={cn("App")}>
            <Navbar/>
            <div className="app-content-outer">
                <Sidebar/>
                <main role="main" className="app-content">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
};