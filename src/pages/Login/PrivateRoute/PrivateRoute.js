import React from 'react';
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress } from "@mui/material";


const PrivateRoute = ({children,...rest}) => {
    const {isLoading, user } = useAuth();
    
    let location= useLocation();

    if(isLoading){
        return <CircularProgress color="success" />
    }

    if(user.email){
        return children;
    }
    else{
        return <Navigate to="/login" state={{from:location}} />
    }

};

export default PrivateRoute;