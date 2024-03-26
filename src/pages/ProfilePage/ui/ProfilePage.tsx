import { type FC, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileLoading,
    getProfileForm,
    getProfileReadonly,
    profileReducer,
    profileActions, type IProfile,
    ProfileCardEdit,
    ProfileCard, updateProfileData
} from "entities/Profile";
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
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onSetReadonly = useCallback((readonly: boolean) => {
        dispatch(profileActions.setReadonly(readonly));
    }, [dispatch]);

    const onUpdateData = useCallback((payload: IProfile) => {
        dispatch(profileActions.updateData(payload));
    }, [dispatch]);

    const onCancelData = useCallback(() => {
        dispatch(profileActions.cancelData());
    }, [dispatch]);

    const onSaveData = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cn(cls.ProfilePage, className)}>
                <h1>{t("Профиль")}</h1>
                {
                    readonly
                        ? <ProfileCard
                            data={formData}
                            isLoading={isLoading}
                            error={error}
                            setReadOnly={onSetReadonly}
                        />
                        : <ProfileCardEdit
                            updateData={onUpdateData}
                            cancelData={onCancelData}
                            saveData={onSaveData}
                            isLoading={isLoading}
                            data={formData}
                        />
                }
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;