import { type FC, memo } from "react";
import { ArticleDetails } from "entities/Article";
import cls from "./ArticleDetailPage.module.scss";

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = () => {
    return (
        <>
            <h1>Article Detail Page</h1>
            <ArticleDetails />
        </>
    );
};

export default memo(ArticleDetailPage);