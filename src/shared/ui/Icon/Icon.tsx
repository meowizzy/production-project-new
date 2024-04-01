import { type FC, type SVGProps } from "react";
import cls from "./Icon.module.scss";
import cn from "classnames";

interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>
}
export const Icon: FC<IconProps> = (props) => {
    const {
        className,
        Svg
    } = props;
    return (
        <Svg
            className={cn(cls.Icon, className)}
        />
    );
};
