import { type RouteProps } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import { App } from "app";
import { NotFoundPage } from "pages/NotFoundPage";

export enum AppRoutes {
    ROOT = "root",
    HOME = "home",
    ABOUT = "about",
    NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ROOT]: "/",
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ROOT]: {
        path: RoutePath.root,
        element: <App />
    },
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
