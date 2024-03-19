import { type FC, useCallback, useMemo, useState } from "react";
import { SidebarItemList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Button, ThemeButton } from "shared/ui/Button";
import Arrow from "shared/assets/rightArrow.svg";
import styles from "./Sidebar.module.scss";
import cn from "classnames";

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { className } = props;

    const itemsList = useMemo(() => {
        return SidebarItemList.map(item => (
            <li key={item.path}>
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                />
            </li>
        ));
    }, [collapsed]);

    const handleSidebarCollapse = useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    return (
        <div data-testid="sidebar" className={cn(styles.Sidebar, className, {
            [styles.opened]: collapsed
        })}>
            <nav className={styles.SidebarMenu}>
                <ul className={styles.SidebarList}>
                    {itemsList}
                </ul>
            </nav>
            <Button
                data-testid="sidebar-toggle"
                cls={styles.Sidebar_btn}
                theme={ThemeButton.CLEAR}
                onClick={handleSidebarCollapse}
            >
                <Arrow/>
            </Button>
        </div>
    );
};