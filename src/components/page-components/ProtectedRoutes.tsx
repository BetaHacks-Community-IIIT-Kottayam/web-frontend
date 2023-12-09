import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/hooks";


const ProtectedRoutes = () => {
    const { isAuth } = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/auth/v1/login' />
};


export default ProtectedRoutes;