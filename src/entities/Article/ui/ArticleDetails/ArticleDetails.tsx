import React, { type FC, memo, useEffect } from "react";
import { articleDetailsReducers } from "entities/Article/model/slice/articleDetailsSlice";
import { useTranslation } from "react-i18next";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import { Text, ThemeText } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Icon } from "shared/ui/Icon/Icon";
import cn from "classnames";
import EyeIcon from "shared/assets/eyeIcon.svg";
import DateIcon from "shared/assets/dateIcon.svg";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
    className?: string;
    articleId?: string;
}

const reducersList: ReducersList = {
    articleDetails: articleDetailsReducers
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const {
        className,
        articleId
    } = props;
    const { t } = useTranslation("article-details");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (articleId) dispatch(fetchArticleById(articleId));
    }, [articleId, dispatch]);

    let content;

    if (isLoading) {
        content = (
            <div className={cls.ArticleIsLoading}>
                <Skeleton
                    width={"250px"}
                    height={"250px"}
                    borderRadius={"50%"}
                    className={cls.circle}
                />
                <Skeleton
                    width={"40%"}
                    height={"30px"}
                    borderRadius={"15px"}
                />
                <Skeleton
                    width={"35%"}
                    height={"30px"}
                    borderRadius={"15px"}
                />
                <Skeleton
                    width={"100%"}
                    height={"300px"}
                    borderRadius={"15px"}
                />
                <Skeleton
                    width={"40%"}
                    height={"30px"}
                    borderRadius={"15px"}
                />
                <Skeleton
                    width={"40%"}
                    height={"30px"}
                    borderRadius={"15px"}
                />
                <Skeleton
                    width={"100%"}
                    height={"300px"}
                    borderRadius={"15px"}
                />
            </div>
        );
    } else if (error) {
        content = <div className={cls.error}><h1>{t("Статья не найдена")}</h1></div>;
    } else {
        content = (
            <>
                <Avatar
                    imgPath={data?.img}
                    alt={data?.title}
                    width={"200px"}
                    height={"200px"}
                    className={cls.avatar}
                />
                <Text
                    className={cls.heading}
                    theme={ThemeText.SECONDARY}
                    title={data?.title}
                    description={data?.subtitle}
                />
                <div className={cls.articleInfoWrap}>
                    <div className={cls.articleInfo}>
                        <Icon
                            Svg={EyeIcon}
                        />
                        <Text
                            theme={ThemeText.SECONDARY}
                            description={String(data?.views)}
                        />
                    </div>
                    <div className={cls.articleInfo}>
                        <Icon
                            Svg={DateIcon}
                        />
                        <Text
                            theme={ThemeText.SECONDARY}
                            description={data?.createdAt}
                        />
                    </div>
                </div>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount={true}>
            <div className={cn(cls.details, className)}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});