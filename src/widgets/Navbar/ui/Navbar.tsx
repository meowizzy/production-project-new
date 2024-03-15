import React, { type FC } from "react";
import cn from "classnames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { Login } from "shared/ui/Login";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <header className={cn(styles.header)}>
            <ThemeSwitcher className={styles.theme}/>
            <LanguageSwitcher className={styles.lang}/>
            <Login classname={styles.login}/>
        </header>
    );
};
