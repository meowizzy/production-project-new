import { type FC } from "react";
import cn from "classnames";
import cls from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "../../model/selectors/getProfileLoading/getProfileLoading";

interface ProfileCardProps {
    className?: string;
}
const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className
    } = props;
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={cn(cls.ProfileCard, className)}>

        </div>
    );
};

export default ProfileCard;