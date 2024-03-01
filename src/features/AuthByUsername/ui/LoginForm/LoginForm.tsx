import { type FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import styles from "./LoginForm.module.scss";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC = memo((props: LoginFormProps) => {
    const {
        className
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { email, password } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string): void => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string): void => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        // @ts-expect-error
        dispatch(loginByUsername({ email, password }));
    }, [dispatch, email, password]);

    return (
        <div className={cn(styles.LoginForm, className)}>
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
            <Button onClick={onLoginClick}>
                {t("Войти")}
            </Button>
        </div>
    );
});