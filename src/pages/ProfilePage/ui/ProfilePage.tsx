import { type FC } from "react";
import { useTranslation } from "react-i18next";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

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
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <h1>{t("Профиль")}</h1>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;