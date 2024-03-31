import { type FC } from 'react';
import { useTranslation } from "react-i18next";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
    const {
        className
    } = props;
    const { t } = useTranslation();

    return (
        <div>
            Article Image Block Component
        </div>
    );
};