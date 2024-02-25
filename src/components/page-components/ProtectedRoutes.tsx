import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAuth } from "../../hooks/hooks";
import { useEffect } from "react";
import { flushBlog } from "../../redux/features/blog/blogSlice";
import { flushUser } from "../../redux/features/user/userSlice";
import { setAuthenticated, userLogout } from "../../redux/features/auth/authSlice";
import { verifyTokenService } from "../../redux/features/auth/authService";
import { useVerifyOtpServiceMutation, useVerifyTokenServiceQuery } from "../../redux/features/auth/authAPI";
import Overlay from "../ui/Overlay";


const ProtectedRoutes = () => {
    const { isAuth,status} = useAuth();
    const dispatch=useAppDispatch();
    const {data,isLoading,isError}=useVerifyTokenServiceQuery();
    useEffect(() => {
        if(data){
           const {token}=data;
           dispatch(setAuthenticated(token));
        }
        if(isError){
            dispatch(userLogout());
            dispatch(flushBlog());
            dispatch(flushUser());
        }
    },[data,isLoading,isError]);
    
    return isLoading ? <Overlay message="Processing request please wait...." /> 
                     : isAuth ? <Outlet /> : <Navigate to='/auth/v1/login' />;
};

export default ProtectedRoutes;