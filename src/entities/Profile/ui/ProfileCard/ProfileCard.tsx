import { type FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { type IProfile } from "../../model/types/profile";
import { Button } from "shared/ui/Button";
import { Loader } from "shared/ui/Loader";
import cn from "classnames";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    error?: string;
}
export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const {
        className,
        data,
        isLoading,
        error
    } = props;
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div className={cn(cls.ProfileCard, className)}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={cn(cls.ProfileCard, className)}>
            <div className={cls.header}>

                <Button>
                    {t("Редактировать профиль")}
                </Button>
            </div>
            <div className={cls.data}>

            </div>
        </div>
    );
});