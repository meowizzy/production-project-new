import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginLoading } from "./getLoginLoading";

describe("getLoginLoading.test", () => {
    test("is loading", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        };

        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });

    test("is not loading", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});