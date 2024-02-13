import { type FC } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import cn from "classnames";

import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <header className={cn(styles.header)}>
            <nav className={cn(styles.navbar, className)}>
                <ul>
                    <li><Link to="/">{t("Главная")}</Link></li>
                    <li><Link to="/about">{t("О нас")}</Link></li>
                </ul>
            </nav>
            <ThemeSwitcher className={styles.theme}/>
            <LanguageSwitcher className={styles.lang}/>
        </header>
    );
};
