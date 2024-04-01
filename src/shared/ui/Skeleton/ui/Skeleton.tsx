import { type CSSProperties, type FC } from "react";
import cn from "classnames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    width: string;
    height: string;
    borderRadius?: string;
}
export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className,
        width,
        height,
        borderRadius
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius
    };

    return (
        <div
            className={cn(cls.Skeleton, className)}
            style={styles}
        />
    );
};