import { Button, ThemeButton } from "shared/ui/Button";
import { render, screen } from "@testing-library/react";

describe("ButtonTest", () => {
    test("button without theme", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("button with clear theme", () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass(ThemeButton.CLEAR);
        screen.debug();
    });
    test("button with primary theme", () => {
        render(<Button theme={ThemeButton.PRIMARY}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass(ThemeButton.PRIMARY);
        screen.debug();
    });
});