import { type FC } from "react";
import { Modal } from "shared/ui/Modal";
import cn from "classnames";
import { LoginForm } from "../LoginForm/LoginForm";
import styles from "./LoginModal.module.scss";

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose
    } = props;

    return (
        <Modal classname={cn(styles.LoginModal, className)} isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    );
};
