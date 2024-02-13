import { type FC } from "react";
import { Button, ThemeButton } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import LangIcon from "shared/assets/lang.svg";
import styles from "./LanguageSwitcher.module.scss";
import cn from "classnames";

interface LanguageSwitcherProps {
    className?: string
}
export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation();

    const switchLanguage = async () => await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
        <Button
            theme={ ThemeButton.CLEAR }
            onClick={ switchLanguage }
            cls={ cn(styles.langSwitcher, className) }
        >
            <LangIcon />
        </Button>
    );
};