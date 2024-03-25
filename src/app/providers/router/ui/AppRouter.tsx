import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import { routeConfig, RoutePath } from "shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";
import { App } from "app";

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={RoutePath.home} element={<App />}>
            {
                Object.values(routeConfig).map(route => (
                    <Route path={ route.path } key={ route.path } element={
                        <Suspense fallback={<PageLoader />}>
                            { route.element }
                        </Suspense>
                    }/>
                ))
            }
        </Route>
    )
);
