import { type FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { loginActions } from "../../";
import { useSelector } from "react-redux";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import {
    getLoginEmail,
    getLoginError,
    getLoginLoading,
    getLoginPassword
} from "../../model/selectors/index";
import { loginReducer } from "../../model/slice/loginSlice";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ThemeButton } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text, ThemeText } from "shared/ui/Text";
import styles from "./LoginForm.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

const LoginForm: FC = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);
    const navigate = useNavigate();

    const onChangeUsername = useCallback((value: string): void => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string): void => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ email, password }));

        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
            navigate(RoutePath.profile);
        }
    }, [navigate, dispatch, email, password, onSuccess]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
        >
            <div className={cn(styles.LoginForm, className)}>
                <Text title={t("Авторизация")}/>
                {error &&
                    <Text
                        theme={ThemeText.ERROR}
                        description={t(error)}
                    />
                }
                <Input
                    className={styles.input}
                    placeholder={t("Логин")}
                    onChange={onChangeUsername}
                    value={email}
                />
                <Input
                    type="password"
                    placeholder={t("Пароль")}
                    className={styles.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    onClick={onLoginClick}
                    theme={isLoading ? ThemeButton.LOADING : ThemeButton.PRIMARY}
                >
                    {t("Войти")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;