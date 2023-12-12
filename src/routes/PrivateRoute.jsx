import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthConext } from "../providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthConext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;