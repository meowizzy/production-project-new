import { type FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <h1>{t("Профиль")}</h1>

        </DynamicModuleLoader>
    );
};

export default ProfilePage;