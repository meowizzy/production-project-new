import { type FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Button, ThemeButton } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text, ThemeText } from "shared/ui/Text";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import styles from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string
}

const LoginForm: FC = memo((props: LoginFormProps) => {
    const {
        className
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { email, password, isLoading, error } = useSelector(getLoginState);

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
        <div className={cn(styles.LoginForm, className)}>
            <Text title={t("Авторизация")}/>
            { error &&
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
    );
});

export default LoginForm;