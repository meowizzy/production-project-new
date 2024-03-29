import { type IProfile } from "../../types/profile";
import { ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: IProfile): ValidateProfileError[] | ValidateProfileError => {
    const errors: ValidateProfileError[] = [];
    if (!profile) {
        return ValidateProfileError.NO_DATA;
    }
    const {
        firstName,
        lastName,
        username,
        age
    } = profile;

    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (!age || !Number.isInteger(Number(age))) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }

    return errors;
};