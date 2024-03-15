import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginEmail } from "./getLoginEmail";

describe("getLoginEmail.test", () => {
    test("should return email", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                email: "test@example.com"
            }
        };

        expect(getLoginEmail(state as StateSchema)).toEqual("test@example.com");
    });

    test("should return empty string", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginEmail(state as StateSchema)).toEqual("");
    });
});