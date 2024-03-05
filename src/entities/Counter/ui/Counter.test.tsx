import { fireEvent, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Counter", () => {
    test("render counter", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
        screen.debug();
    });
    test("increment", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        fireEvent.click(screen.getByTestId("increment-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
        screen.debug();
    });
    test("decrement", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        fireEvent.click(screen.getByTestId("decrement-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
        screen.debug();
    });
});