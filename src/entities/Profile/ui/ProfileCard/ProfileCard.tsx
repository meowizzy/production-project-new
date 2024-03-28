import { type FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { type IProfile } from "../../model/types/profile";
import { Button } from "shared/ui/Button";
import { Text, ThemeText } from "shared/ui/Text";
import { Loader } from "shared/ui/Loader";
import { RowOption } from "shared/ui/RowOption";
import cn from "classnames";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    setReadOnly?: (readonly: boolean) => void,
    error?: string;
}
export const ProfileCard: FC<ProfileCardProps> = memo((props) => {
    const {
        className,
        data,
        isLoading,
        error,
        setReadOnly
    } = props;
    const { t } = useTranslation("profile");
    if (isLoading) {
        return (
            <div className={cn(cls.ProfileCard, className, cls.loading)}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cn(cls.ProfileCard, className, cls.error)}>
                <Text theme={ThemeText.ERROR} description={t(error)}/>
            </div>
        );
    }
    return (
        <div className={cn(cls.ProfileCard, className)}>
            <div className={cls.data}>
                <div className={cls.dataTop}>
                    {
                        data?.avatar
                            ? (
                                <div className={cls.avatar}>
                                    <img src={data?.avatar} alt={data?.username}/>
                                </div>
                            )
                            : ""
                    }
                    <Text
                        className={cls.dataName}
                        theme={ThemeText.SECONDARY}
                        title={`${data?.firstName} ${data?.lastName}`}
                    />
                </div>
                <div className={cls.dataBody}>
                    <RowOption
                        label={t("Ник")}
                        value={data?.username}
                    />
                    <RowOption
                        label={t("Возраст")}
                        value={data?.age}
                    />
                    <RowOption
                        label={t("Город")}
                        value={data?.city}
                    />
                    <RowOption
                        label={t("Страна")}
                        value={data?.country}
                    />
                </div>
            </div>
            <Button
                cls={cls.Button}
                onClick={() => setReadOnly && setReadOnly(false)}
            >
                {t("Редактировать профиль")}
            </Button>
        </div>
    );
});