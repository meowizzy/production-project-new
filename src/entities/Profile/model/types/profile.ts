import { type Country } from "shared/const/common";

export enum ValidateProfileError {
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_USER_AGE = "INCORRECT_USER_AGE",
    INCORRECT_USERNAME = "INCORRECT_USERNAME",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}
export interface IProfile {
    id?: number;
    firstName?: string;
    lastName?: string;
    age?: string;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[] | ValidateProfileError | string;
}