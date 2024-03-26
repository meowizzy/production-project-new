import { type StateSchema } from "app/providers/StoreProvider";
import { type IProfile } from "entities/Profile";

export const getProfileForm = (state: StateSchema): IProfile | undefined => state.profile?.form;