// import { type StateSchema } from "app/providers/StoreProvider";
// import { getLoginPassword } from "./getLoginPassword";
//
// describe("getLoginPassword.test", () => {
//     test("should return password", () => {
//         const state: DeepPartial<StateSchema> = {
//             loginForm: {
//                 password: "testPassword"
//             }
//         };
//
//         expect(getLoginPassword(state as StateSchema)).toEqual("testPassword");
//     });
//
//     test("should return empty string", () => {
//         const state: DeepPartial<StateSchema> = {};
//
//         expect(getLoginPassword(state as StateSchema)).toEqual("");
//     });
// });