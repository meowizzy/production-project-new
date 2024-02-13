import { type ButtonHTMLAttributes, type DataHTMLAttributes, type FC } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
export enum ThemeButton {
    CLEAR = "clear",
    PRIMARY = "primary"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    cls?: string
    theme?: ThemeButton
    dataTest?: DataHTMLAttributes<any>
}
export const Button: FC<ButtonProps> = (props) => {
    const { cls, children, theme = ThemeButton.PRIMARY } = props;

    return (
        <button className={cn(styles.btn, cls, styles[theme])} {...props}>
            { children }
        </button>
    );
};