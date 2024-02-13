import { lazy } from "react";

const HomeAsync = lazy(async () => await import("./Home"));

export default HomeAsync;
