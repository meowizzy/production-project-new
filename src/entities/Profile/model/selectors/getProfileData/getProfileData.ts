import { type StateSchema } from "app/providers/StoreProvider";
import { type IProfile } from "entities/Profile";

export const getProfileData = (state: StateSchema): IProfile | undefined => state.profile?.data;