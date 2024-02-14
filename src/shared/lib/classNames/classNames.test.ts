import classNames from "shared/lib/classNames/classNames";

describe("classNames", () => {
    test("Single class name test", () => {
        const expected = "someClass";
        expect(classNames("someClass")).toBe(expected);
    });
    test("Multiple class names test", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", ["class1", "class2"])).toBe(expected);
    });
    test("Test with conditions", () => {
        const expected = "someClass isActive hovered";
        expect(classNames("someClass", { isActive: true, hovered: true, scrollable: false })).toBe(expected);
    });
});