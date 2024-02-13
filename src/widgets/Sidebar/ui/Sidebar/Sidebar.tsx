import React, { type FC, useState } from "react";
import cn from "classnames";
import styles from "./Sidebar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button";
import Arrow from "shared/assets/rightArrow.svg";

interface SidebarProps {
    cls?: string
}
export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { cls } = props;

    return (
        <div className={cn(styles.Sidebar, cls, {
            [styles.opened]: collapsed
        })}>
            <Button
                cls={ styles.Sidebar_btn }
                theme={ ThemeButton.CLEAR }
                onClick={ () => { setCollapsed(!collapsed); } }
            >
                <Arrow />
            </Button>
        </div>
    );
};