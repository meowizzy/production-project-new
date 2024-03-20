import { Route, Routes } from "react-router-dom";
import { routeConfig, RoutePath } from "shared/config/routeConfig/routeConfig";
import { type FC, Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";
import { AppLayout } from "app/AppLayout/AppLayout";

export const AppRouter: FC = () => {
    return <Routes>
        <Route path={RoutePath.home} element={<AppLayout />}>
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
    </Routes>;
};
