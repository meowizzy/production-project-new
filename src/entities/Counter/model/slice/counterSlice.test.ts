import { counterActions, counterReducer } from "./counterSlice";
import { type CounterSchema } from "entities/Counter";

describe("counterSlice", () => {
    test("decrement", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test("increment", () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test("empty state", () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});