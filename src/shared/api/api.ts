import axios from "axios";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { type AUTH_DATA } from "app/providers/StoreProvider/config/StateSchema";

const AUTH: AUTH_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE.AUTH)!);
export const $api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        authorization: `Bearer ${AUTH?.token}`
    }
});