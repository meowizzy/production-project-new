import { useTranslation } from "react-i18next";
import { type FC, memo } from "react";

const AboutPage: FC = () => {
    const { t } = useTranslation("about");
    return (
        <h1>{t("О нас")}</h1>
    );
};

export default memo(AboutPage);
