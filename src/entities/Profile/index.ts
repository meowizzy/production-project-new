export type { IProfile, ProfileSchema } from "./model/types/profile";
export { profileActions, profileReducer } from "./model/slice/profileSlice";
export { ProfileCard } from "./ui/ProfileCard/ProfileCard";
export { getProfileData } from "./model/selectors/getProfileData/getProfileData";
export { getProfileError } from "./model/selectors/getProfileError/getProfileError";
export { getProfileLoading } from "./model/selectors/getProfileLoading/getProfileLoading";