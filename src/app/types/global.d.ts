declare module "*.scss" {
    type IClassNames = Record<string, string>;

    const classNames: IClassNames;

    export = classNames;
}

declare module "*.svg" {
    import type React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare const __IS_DEV__: boolean;

declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
