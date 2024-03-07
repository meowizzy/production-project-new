import React, { type FC, useCallback, useState } from "react";
import cn from "classnames";
import { Button, ThemeButton } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import cls from "./Login.module.scss";
import LoginIcon from "shared/assets/LoginIcon.svg";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserState, userActions } from "entities/User";
import { useTranslation } from "react-i18next";
import { Loader } from "shared/ui/Loader";

interface LoginProps {
    classname?: string
}
export const Login: FC<LoginProps> = (props) => {
    const {
        classname
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { authData, isLoading } = useSelector(getUserState);
    const [modalOpened, setModalOpened] = useState(false);
    const closeHandler = useCallback((): void => {
        setModalOpened(!modalOpened);
    }, [setModalOpened, modalOpened]);

    const onLogout = useCallback((): void => {
        dispatch(userActions.removeAuthData());
        setModalOpened(!modalOpened);
    }, [dispatch, modalOpened]);

    if (isLoading) {
        return <Loader />;
    }

    if (authData) {
        return (
            <div className={cn(cls.Logout, classname)}>
                <Text
                    description={authData.email}
                />
                <Button
                    theme={ThemeButton.PRIMARY}
                    onClick={onLogout}
                >
                    {t("Выйти")}
                </Button>
            </div>
        );
    }

    return (
        <div className={cn(cls.Login, classname)}>
            <Button
                theme={ThemeButton.CLEAR}
                cls={cls.LoginBtn}
                onClick={closeHandler}
            >
                <LoginIcon/>
            </Button>
            <LoginModal
                isOpen={modalOpened}
                onClose={closeHandler}
            />
        </div>
    );
};
