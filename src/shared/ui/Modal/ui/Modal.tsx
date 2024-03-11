import React, { type FC, type MouseEvent, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Portal } from "shared/ui/Portal";
import { Button, ThemeButton } from "shared/ui/Button";
import { MODAL_ANIMATION_DELAY } from "shared/const/const";
import CloseIcon from "shared/assets/closeIcon.svg";
import cls from "./Modal.module.scss";

interface ModalProps {
    classname?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}
export const Modal: FC<ModalProps> = (props) => {
    const {
        classname,
        children,
        isOpen,
        onClose
    } = props;

    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const onContentClick = (e: MouseEvent): void => {
        e.stopPropagation();
    };
    const closeHandler = useCallback((): void => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, MODAL_ANIMATION_DELAY);
        }
    }, [setIsClosing, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.code === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={ cn(
                cls.Modal,
                classname,
                {
                    [cls.opened]: isOpen,
                    [cls.isClosing]: isClosing
                })
            }>
                <div className={ cls.ModalOverlay } onClick={ closeHandler }>
                    <div className={ cls.ModalContent } onClick={ onContentClick }>
                        <Button
                            theme={ ThemeButton.CLEAR }
                            cls={ cls.ModalCloseBtn }
                            onClick={ closeHandler }
                        >
                            <CloseIcon />
                        </Button>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    );
};