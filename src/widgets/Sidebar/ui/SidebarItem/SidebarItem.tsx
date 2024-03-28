import { type FC, memo } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import { type SidebarItemType } from "../../model/items";
import style from "./SidebarItem.module.scss";
import cn from "classnames";
import {useSelector} from "react-redux";
import {getUserState} from "entities/User";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const {
        item,
        collapsed
    } = props;
    const { t } = useTranslation();
    const { authData } = useSelector(getUserState);

    if (!authData && item.authOnly) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item.path}
            className={cn(style.item, { [style.collapsed]: collapsed })}
        >
            {
                item.Icon && <item.Icon className={style.Icon}/>
            }
            <span className={style.label}>{t(item.text)}</span>
        </AppLink>
    );
});