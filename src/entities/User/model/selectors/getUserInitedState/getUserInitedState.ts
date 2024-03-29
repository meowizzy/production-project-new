import { type StateSchema } from "app/providers/StoreProvider";

export const getUserInitedState = (state: StateSchema) => state.user._inited;