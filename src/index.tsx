import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import { StoreProvider } from "app/providers/StoreProvider";
import "shared/config/i18n/i18n";
import { App } from "app";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);