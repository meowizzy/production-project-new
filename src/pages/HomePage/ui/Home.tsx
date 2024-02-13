import { useTranslation } from "react-i18next";
import { type FC } from "react";

const Home: FC = () => {
    const { t } = useTranslation("home");

    return (
        <h1>{t("Главная страница")}</h1>
    );
};

export default Home;