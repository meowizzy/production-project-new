import React, { type FC } from "react";
import cn from "classnames";
import cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string
}
export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={ cn(cls.ldsHourglass, className) } />
    );
};