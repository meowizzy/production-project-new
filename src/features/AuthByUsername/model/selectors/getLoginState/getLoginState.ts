import { type StateSchema } from "app/providers/StoreProvider";
import { type LoginSchema } from "features/AuthByUsername";

// @ts-expect-error
export const getLoginState = (state: StateSchema): LoginSchema => state?.loginForm;