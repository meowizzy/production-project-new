import React, { type FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import cn from "classnames";

import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Login } from "shared/ui/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUserState } from "entities/User/model/getUserState/getUserState";
import { Button } from "shared/ui/Button";
import { LOCAL_STORAGE } from "shared/const/localstorage";
import { userActions } from "entities/User";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const { authData } = useSelector(getUserState);
    const dispatch = useDispatch();

    const onLogoutClick = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE.USER_ID);
        dispatch(userActions.removeAuthData());
    }, [dispatch]);

    return (
        <header className={cn(styles.header)}>
            <nav className={cn(styles.navbar, className)}>
                <ul>
                    <li><Link to="/">{t("Главная")}</Link></li>
                    <li><Link to="/about">{t("О нас")}</Link></li>
                </ul>
            </nav>
            {
                authData && <>
                    <p>{authData?.email}</p>
                    <Button onClick={onLogoutClick} >Выйти</Button>
                </>
            }
            <ThemeSwitcher className={styles.theme}/>
            <LanguageSwitcher className={styles.lang}/>
            <Login classname={styles.login}/>
        </header>
    );
};
