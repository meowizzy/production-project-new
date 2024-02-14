import { render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";

describe("SidebarTest", () => {
    test("render sidebar", () => {
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        screen.debug();
    });
});