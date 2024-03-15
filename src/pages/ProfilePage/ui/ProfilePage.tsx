import { type FC } from "react";

interface ProfilePageProps {
    className?: string
}
const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className
    } = props;
    return (
        <h1>ProfilePage</h1>
    );
};

export default ProfilePage;