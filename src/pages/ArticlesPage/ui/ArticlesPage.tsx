import { type FC } from "react";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = () => {
    return (
        <h1>Articles Page</h1>
    );
};

export default ArticlesPage;