import { type FC, type ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInitedState, getUserState } from "entities/User";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface PrivateRouteProps {
    children?: ReactNode;
    authOnly?: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = (props) => {
    const {
        children,
        authOnly
    } = props;
    const { authData } = useSelector(getUserState);
    const isInited = useSelector(getUserInitedState);
    const navigate = useNavigate();

    useEffect(() => {
        if (isInited && !authData && authOnly) {
            navigate(RoutePath.home);
        }
    }, [authData, navigate, authOnly, isInited]);

    return (!authData && authOnly ? null : <>{ children }</>);
};