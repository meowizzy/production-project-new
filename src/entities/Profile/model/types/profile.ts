import { type Country } from "shared/const/common";

export interface IProfile {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}