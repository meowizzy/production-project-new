import { memo, type NamedExoticComponent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import cls from "./AppLink.module.scss";
import cn from "classnames";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
interface AppLinkProps {
    className?: string;
    to: string;
    theme?: AppLinkTheme;
    children: ReactNode
}
export const AppLink: NamedExoticComponent<AppLinkProps> = memo((props) => {
    const {
        className,
        to,
        theme = AppLinkTheme.PRIMARY,
        children
    } = props;
    return (
        <Link
            to={to}
            className={cn(className, cls[theme], cls.AppLink)}
        >
            {children}
        </Link>
    );
});
