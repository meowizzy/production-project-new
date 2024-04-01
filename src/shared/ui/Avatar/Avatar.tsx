import { type CSSProperties, type FC } from "react";
import cls from "./Avatar.module.scss";
import cn from "classnames";

interface AvatarProps {
    className?: string;
    width?: string;
    height?: string;
    imgPath?: string;
    alt?: string;
}
export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        width = "250px",
        height = "250px",
        imgPath,
        alt
    } = props;

    const styles: CSSProperties = {
        width,
        height
    };

    if (!imgPath) return null;

    return (
        <div
            className={cn(cls.avatar, className)}
            style={styles}>
            <img
                src={imgPath}
                alt={alt}/>
        </div>
    );
};