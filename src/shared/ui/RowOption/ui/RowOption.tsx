import { type FC } from "react";
import cls from "./RowOption.module.scss";
import cn from "classnames";

interface RowOptionProps {
    className?: string;
    label?: string;
    value?: string | number;
}
export const RowOption: FC<RowOptionProps> = (props) => {
    const {
        className,
        label,
        value
    } = props;

    return (
        <p className={cn(cls.row, className)}>
            <span className={cls.label}>
                {label}
            </span>
            <span className={cls.value}>
                {value || "-"}
            </span>
        </p>
    );
};