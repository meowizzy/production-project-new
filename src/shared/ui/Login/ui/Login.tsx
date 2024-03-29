import { type FC, memo, useCallback, useState } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Link, useNavigate } from "react-router-dom";
import { Button, ThemeButton } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserState, userActions } from "entities/User";
import { useTranslation } from "react-i18next";
import { Loader } from "shared/ui/Loader";
import LoginIcon from "shared/assets/LoginIcon.svg";
import cn from "classnames";
import cls from "./Login.module.scss";

interface LoginProps {
    classname?: string
}
export const Login: FC<LoginProps> = memo((props) => {
    const {
        classname
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { authData, isLoading } = useSelector(getUserState);
    const [modalOpened, setModalOpened] = useState(false);
    const navigate = useNavigate();
    const toggleHandler = useCallback((): void => {
        setModalOpened(!modalOpened);
    }, [setModalOpened, modalOpened]);

    const onLogout = useCallback((): void => {
        dispatch(userActions.removeAuthData());
        navigate(RoutePath.home);
        toggleHandler();
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    if (authData) {
        return (
            <div className={cn(cls.Logout, classname)}>
                <Link to={RoutePath.profile} className={cls.link}>
                    <Text
                        description={authData.email}
                    />
                </Link>
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
                onClick={toggleHandler}
            >
                <LoginIcon/>
            </Button>
            <LoginModal
                isOpen={modalOpened}
                onClose={toggleHandler}
            />
        </div>
    );
});
