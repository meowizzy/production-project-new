import { getCounter } from "./getCounter";
import { type StateSchema } from "app/providers/StoreProvider";

describe("getCounter", () => {
    test("should return counter field", () => {
        const state: Partial<StateSchema> = {
            counter: {
                value: 10
            }
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
