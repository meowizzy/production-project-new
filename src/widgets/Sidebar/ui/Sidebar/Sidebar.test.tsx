import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";

describe("SidebarTest", () => {
    test("render sidebar", () => {
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        screen.debug();
    });

    test("test sidebar toggle", () => {
        render(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("opened");
        screen.debug();
    });
});