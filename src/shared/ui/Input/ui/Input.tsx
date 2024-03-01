import { type ChangeEventHandler, type InputHTMLAttributes, memo } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

type HTMlInputElement = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;
export interface InputProps extends HTMlInputElement {
    className?: string
    value?: string
    onChange?: (value: string) => void
}
// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = "text",
        ...otherProps
    } = props;

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (e): void => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cn(styles.InputWrapper, className)}>
            {
                placeholder && <p className={styles.InputLabel}>
                    {placeholder}
                </p>
            }
            <input
                type={type}
                value={value}
                onChange={changeHandler}
                className={styles.Input}
                {...otherProps}
            />
        </div>
    );
});