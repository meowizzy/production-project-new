import styles from "./PageError.module.scss";
import cn from "classnames";
import { type FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { useNavigate } from "react-router-dom";

interface PageErrorProps {
    className?: string
}

export const PageError: FC = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const reloadPage = (): void => {
        navigate("/");
    };

    return (
        <div className={ cn(styles.PageError) }>
            <p>{ t("Упс... Что-то пошло не так.") }</p>
            <Button onClick={ reloadPage }>
                { t("Перейти на главную") }
            </Button>
        </div>
    );
};