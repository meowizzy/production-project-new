import { type FC, memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cls from "./ArticleDetailPage.module.scss";

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = () => {
    const { articleId } = useParams();
    const { t } = useTranslation("article-details");

    return (
        <>
            <ArticleDetails
                articleId={articleId}
            />
        </>
    );
};

export default memo(ArticleDetailPage);