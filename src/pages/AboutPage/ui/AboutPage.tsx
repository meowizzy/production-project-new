import { useTranslation } from "react-i18next";
import { type FC, useEffect } from "react";

const AboutPage: FC = () => {
    const { t } = useTranslation("about");

    useEffect(() => {
        // eslint-disable-next-line no-new
        throw new Error();
    }, []);

    return (
        <h1>{t("О нас")}</h1>
    );
};

export default AboutPage;
