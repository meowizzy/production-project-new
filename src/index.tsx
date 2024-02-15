import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import { AppRouter } from "app/providers/router/ui/AppRouter";
import "shared/config/i18n/i18n";
import { StoreProvider } from "app/providers/StoreProvider";

createRoot(document.getElementById("root")!).render(
    <StoreProvider>
        <ThemeProvider>
            <RouterProvider router={ AppRouter } />
        </ThemeProvider>
    </StoreProvider>
);