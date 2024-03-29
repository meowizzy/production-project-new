import { type FC, memo, useMemo } from "react";
import cn from "classnames";
import type { IProfile } from "entities/Profile";
import { getProfileValidateErrors } from "entities/Profile";
import { Input } from "shared/ui/Input";
import { useTranslation } from "react-i18next";
import { Text, ThemeText } from "shared/ui/Text";
import { ThemeInput } from "shared/ui/Input/ui/Input";
import { Button, ThemeButton } from "shared/ui/Button";
import cls from "./ProfileCardEdit.module.scss";
import { useSelector } from "react-redux";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

interface ProfileCardEditProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    updateData?: (formData: IProfile) => void;
    cancelData?: () => void;
    saveData?: () => void;
}
export const ProfileCardEdit: FC<ProfileCardEditProps> = memo((props) => {
    const {
        className,
        data,
        updateData,
        cancelData,
        saveData,
        isLoading
    } = props;
    const { t } = useTranslation("profile");
    const validateErrors = useSelector(getProfileValidateErrors);

    const fields = useMemo(() => {
        return [
            { label: t("Имя"), value: data?.firstName, key: "firstName" },
            { label: t("Фамилия"), value: data?.lastName, key: "lastName" },
            { label: t("Ник"), value: data?.username, key: "username" },
            { label: t("Возраст"), value: data?.age, key: "age" },
            { label: t("Город"), value: data?.city, key: "city" },
            { label: t("Страна"), value: data?.country, key: "country" }
        ];
    }, [data, t]);

    const validateErrorTranslations = useMemo(() => {
        return {
            [ValidateProfileError.SERVER_ERROR]: t("Произошла серверная ошибка при сохранении данных пользователя."),
            [ValidateProfileError.INCORRECT_USER_AGE]: t("Неверно указан возраст."),
            [ValidateProfileError.INCORRECT_USERNAME]: t("Поле \"Ник\" обязательное."),
            [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны."),
            [ValidateProfileError.NO_DATA]: t("Заполните все обязательные поля")
        };
    }, [t]);
    let validateError;

    if (typeof validateErrors === "string") {
        // @ts-expect-error
        validateError = <Text theme={ThemeText.ERROR} description={validateErrorTranslations[validateErrors]}/>;
    } else if (Array.isArray(validateErrors)) {
        validateError = validateErrors.map(err => (
            <Text
                key={err}
                theme={ThemeText.ERROR}
                description={validateErrorTranslations[err]}
            />
        ));
    } else {
        validateError = null;
    }

    return (
        <div className={cn(cls.form, className)}>
            <div className={cls.header}>
                <Text
                    theme={ThemeText.SECONDARY}
                    title={t("Редактирование профиля")}
                />
            </div>
            {validateError}
            {
                fields.map(({ label, value, key }) => (
                    <div className={cls.InputField} key={label}>
                        <Input
                            theme={ThemeInput.SECONDARY}
                            placeholder={label}
                            value={value}
                            onChange={(value) => updateData && updateData({ ...data, [key]: value })}
                        />
                    </div>
                ))
            }
            <div className={cls.btns}>
                {
                    isLoading
                        ? <Button
                            cls={cls.SaveBtn}
                            theme={ThemeButton.LOADING}
                        >
                            {t("Сохранить изменения")}
                        </Button>
                        : <Button
                            cls={cls.SaveBtn}
                            onClick={saveData}
                        >
                            {t("Сохранить изменения")}
                        </Button>
                }
                <Button
                    theme={ThemeButton.SECONDARY}
                    cls={cls.CancelBtn}
                    onClick={cancelData}
                >
                    {t("Отменить")}
                </Button>
            </div>
        </div>
    );
});