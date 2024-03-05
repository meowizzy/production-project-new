import cn from "classnames";
import styles from "./Text.module.scss";
import { type FC } from "react";

export enum ThemeText {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    ERROR = "error"
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: ThemeText
}
export const Text: FC<TextProps> = (props) => {
    const {
        className,
        title,
        description,
        theme = ThemeText.PRIMARY
    } = props;

    if (!title && !description) return <></>;

    return (
        <div className={cn(styles.Text, className, styles[theme])}>
            {title && <p className={cn(styles.title)}>{title}</p>}
            {description && <p className={cn(styles.description)}>{description}</p>}
        </div>
    );
};