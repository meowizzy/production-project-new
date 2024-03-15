import React, { type FC } from "react";
import { AppLink } from "shared/ui/AppLink";
import cls from "./Menu.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { type MenuItemType } from "shared/ui/Menu";

interface MenuProps {
    className?: string;
    list: MenuItemType[];
}
export const Menu: FC<MenuProps> = (props) => {
    const {
        className,
        list
    } = props;
    const { t } = useTranslation();
    return (
        <nav className={cn(className, cls.Menu)}>
            <ul className={cn(cls.Menu_list)}>
                {list.map(item => (
                    <AppLink
                        to={item.path}
                        key={item.path}
                    >
                        {<item.icon />}
                        {t(item.text)}
                    </AppLink>
                ))}
            </ul>
        </nav>
    );
};