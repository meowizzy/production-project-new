import { type FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getProfileData, getProfileError, ProfileCard, profileReducer, getProfileLoading } from "entities/Profile";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import cls from "./ProfilePage.module.scss";
import cn from "classnames";

const reducers: ReducersList = {
    profile: profileReducer
};
interface ProfilePageProps {
    className?: string
}
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cn(cls.ProfilePage, className)}>
                <h1>{t("Профиль")}</h1>
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;