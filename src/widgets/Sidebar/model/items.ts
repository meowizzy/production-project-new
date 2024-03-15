import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/menu/home.svg";
import AboutIcon from "shared/assets/menu/aboutIcon.svg";
import ProfileIcon from "shared/assets/menu/profile.svg";
import { type MenuItemType } from "shared/ui/Menu";

export const SidebarItemList: MenuItemType[] = [
    {
        path: RoutePath?.home,
        icon: HomeIcon,
        text: "Главная"
    },
    {
        path: RoutePath?.about,
        icon: AboutIcon,
        text: "О нас"
    },
    {
        path: RoutePath?.profile,
        icon: ProfileIcon,
        text: "Профиль"
    }
];