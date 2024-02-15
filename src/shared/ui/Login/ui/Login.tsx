import React, { type FC, useCallback, useState } from "react";
import cn from "classnames";
import { Button, ThemeButton } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";
import cls from "./Login.module.scss";
import LoginIcon from "shared/assets/LoginIcon.svg";

interface LoginProps {
    classname?: string
}
export const Login: FC<LoginProps> = (props) => {
    const {
        classname
    } = props;
    const [modalOpened, setModalOpened] = useState(false);
    const closeHandler = useCallback((): void => {
        setModalOpened(!modalOpened);
    }, [setModalOpened, modalOpened]);

    return (
        <div className={cn(cls.Login, classname)}>
            <Button
                theme={ ThemeButton.CLEAR }
                cls={ cls.LoginBtn }
                onClick={ closeHandler }
            >
                <LoginIcon />
            </Button>
            <Modal
                isOpen={modalOpened}
                onClose={closeHandler}
            />
        </div>
    );
};
