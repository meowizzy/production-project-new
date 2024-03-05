import { type ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";

export interface ComponentRenderOptions {
    route?: string
    initialState?: Partial<StateSchema>
}
export function componentRender (component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = "/",
        initialState
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </StoreProvider>
    );
}