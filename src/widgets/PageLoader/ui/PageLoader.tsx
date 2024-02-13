import React, { type FC } from "react";
import cn from "classnames";
import { Loader } from "shared/ui/Loader";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
    className?: string
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={cn(cls.pageLoader, className)}>
            <Loader />
        </div>
    );
};
