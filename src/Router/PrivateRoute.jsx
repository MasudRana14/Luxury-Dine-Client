import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Pages/Providers/AuthProvider";

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);

    const location = useLocation();

    if(loader){
        return < div className="flex justify-center mx-auto py-20">
            <span className="loading loading-spinner text-success w-20"></span>
        </div>
    }
    
    if(user){
        return children;
    }
     return <Navigate state={location.pathname} to="/login"></Navigate>
    
    
};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
    }

export default PrivateRoute;