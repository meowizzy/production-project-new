import { type StateSchema } from "app/providers/StoreProvider";
import { type ValidateProfileError } from "../../types/profile";

export const getProfileValidateErrors = (state: StateSchema): ValidateProfileError[] | undefined | string => state.profile?.validateErrors;