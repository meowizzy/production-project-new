import { type FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { articleDetailsReducers } from "../../model/slices/articleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useParams } from "react-router-dom";
import cn from "classnames";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetails: articleDetailsReducers
};

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const {
        className
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) dispatch(fetchArticleById(id));
    }, [id, dispatch]);

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount={true}>
            <div className={cn(cls.details, className)}>
                Article Details Component
            </div>
        </DynamicModuleLoader>
    );
};