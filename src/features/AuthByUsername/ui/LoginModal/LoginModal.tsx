import { type FC, Suspense } from "react";
import { Modal } from "shared/ui/Modal";
import cn from "classnames";
import { LoginFormAsync } from "features/AuthByUsername";
import styles from "./LoginModal.module.scss";
import { Loader } from "shared/ui/Loader";

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
        <Modal
            classname={cn(styles.LoginModal, className)}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
