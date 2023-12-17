import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAuth } from "../../hooks/hooks";
import { useEffect } from "react";
import { flushBlog } from "../../redux/features/blog/blogSlice";
import { flushUser } from "../../redux/features/user/userSlice";
import { userLogout } from "../../redux/features/auth/authSlice";
import { verifyTokenService } from "../../redux/features/auth/authService";


const ProtectedRoutes = () => {
    const { isAuth,status} = useAuth();
    const dispatch=useAppDispatch();
    useEffect(() => {
        dispatch(verifyTokenService());
        if (status.errorMessage?.message === "Unauthorized") {
            dispatch(flushBlog());
            dispatch(flushUser());
            dispatch(userLogout());
        }
    },[isAuth,status.isError]);
    
    return isAuth ? <Outlet /> : <Navigate to='/auth/v1/login' />
};


export default ProtectedRoutes;