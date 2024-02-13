import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import { AppRouter } from "app/providers/router/ui/AppRouter";
import ErrorBoundary from "app/providers/ErrorBoundary";
import "shared/config/i18n/i18n";

createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
        <ThemeProvider>
            <RouterProvider router={ AppRouter } />
        </ThemeProvider>
    </ErrorBoundary>
);