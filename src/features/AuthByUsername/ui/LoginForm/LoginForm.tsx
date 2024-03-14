import { type FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { loginActions } from "../../";
import { useDispatch, useSelector } from "react-redux";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginEmail } from "../../model/selectors/getLoginEmail/getLoginEmail";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { Button, ThemeButton } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text, ThemeText } from "shared/ui/Text";
import styles from "./LoginForm.module.scss";
import cn from "classnames";
import DynamicModuleLoader, { type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

const LoginForm: FC = memo((props: LoginFormProps) => {
    const {
        className
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string): void => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string): void => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ email, password }));
    }, [dispatch, email, password]);

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
                    theme={isLoading ? ThemeButton.DISABLED : ThemeButton.PRIMARY}
                >
                    {t("Войти")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;