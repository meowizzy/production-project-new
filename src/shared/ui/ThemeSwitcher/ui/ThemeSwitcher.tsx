import React, { type FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button";
import cn from "classnames";
import styles from "./ThemeSwitcher.module.scss";
import Icon from "shared/assets/themeicon.svg";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { toggleTheme } = useTheme();
    const { className } = props;

    return (
        <Button
            onClick={ toggleTheme }
            cls={ cn(styles.ThemeSwitcher, className) }
            theme={ ThemeButton.CLEAR }
        >
            <Icon />
        </Button>
    );
};