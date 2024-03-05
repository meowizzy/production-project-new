import React from "react";
import { type ButtonHTMLAttributes, type DataHTMLAttributes, type FC } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
export enum ThemeButton {
    CLEAR = "clear",
    PRIMARY = "primary",
    DISABLED = "disabled"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    cls?: string
    theme?: ThemeButton
    dataTest?: DataHTMLAttributes<any>
}
export const Button: FC<ButtonProps> = (props) => {
    const { cls, children, theme = ThemeButton.PRIMARY } = props;
    const otherProps = {
        ...Object.fromEntries(
            Object.entries(props)
                .filter((key, value) => !key.includes("cls") && !key.includes("children") && !key.includes("theme")))
    };

    return (
        <button className={cn(styles.btn, cls, styles[theme])} { ...otherProps }>
            { children }
        </button>
    );
};