import React, { type FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.notFound}>
            <h1 className={styles.title}>{t("Страница не найдена")}</h1>
        </div>
    );
};