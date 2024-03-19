import HomeIcon from "shared/assets/menu/home.svg";
import AboutIcon from "shared/assets/menu/aboutIcon.svg";
import ProfileIcon from "shared/assets/menu/profile.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.home,
        Icon: HomeIcon,
        text: "Главная"
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "О нас"
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Профиль"
    }
];