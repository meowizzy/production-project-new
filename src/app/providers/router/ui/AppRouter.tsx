import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ routeConfig.root.path } element={ routeConfig.root.element }>
            {
                Object.values(routeConfig).map(route => route.element !== routeConfig.root.element && (
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
