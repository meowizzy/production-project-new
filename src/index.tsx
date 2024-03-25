import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import { StoreProvider } from "app/providers/StoreProvider";
import "shared/config/i18n/i18n";
import ErrorBoundary from "app/providers/ErrorBoundary";
import { AppRouter } from "app/providers/router";

createRoot(document.getElementById("root")!).render(
    <StoreProvider>
        <ErrorBoundary>
            <ThemeProvider>
                <RouterProvider router={AppRouter}/>
            </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>
);