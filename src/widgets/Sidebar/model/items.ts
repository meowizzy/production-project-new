import HomeIcon from "shared/assets/menu/home.svg";
import AboutIcon from "shared/assets/menu/aboutIcon.svg";
import ProfileIcon from "shared/assets/menu/profile.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export const SidebarItemList: SidebarItemType[] = [
    {
        path: "/",
        Icon: HomeIcon,
        text: "Главная"
    },
    {
        path: "/about",
        Icon: AboutIcon,
        text: "О нас"
    },
    {
        path: "/profile",
        Icon: ProfileIcon,
        text: "Профиль"
    }
];