import { type FC, memo } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import { type SidebarItemType } from "../../model/items";
import style from "./SidebarItem.module.scss";
import cn from "classnames";

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