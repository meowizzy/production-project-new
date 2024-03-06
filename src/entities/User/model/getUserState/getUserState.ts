import { type StateSchema } from "app/providers/StoreProvider";
import { type UserSchema } from "entities/User";

export const getUserState = (state: StateSchema): UserSchema => state.user;