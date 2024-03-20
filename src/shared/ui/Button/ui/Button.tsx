import { memo, type NamedExoticComponent, type ButtonHTMLAttributes, type DataHTMLAttributes } from "react";

import styles from "./Button.module.scss";
import cn from "classnames";
export enum ThemeButton {
    CLEAR = "clear",
    PRIMARY = "primary",
    DISABLED = "disabled",
    LOADING = "loading"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    cls?: string
    theme?: ThemeButton
    dataTest?: DataHTMLAttributes<any>
}
export const Button: NamedExoticComponent<ButtonProps> = memo((props) => {
    const {
        cls,
        children,
        theme = ThemeButton.PRIMARY,
        ...otherProps
    } = props;

    return (
        <button className={cn(styles.btn, cls, styles[theme])} { ...otherProps }>
            { children }
        </button>
    );
});