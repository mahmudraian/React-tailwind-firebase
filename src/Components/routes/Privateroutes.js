import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Privateroutes = ({children}) => {
const {user,load}=useContext(AuthContext)

    if(load){
        return <div>Loading...</div>
    }


    if(user && user.uid){
        return children;
    }
    return <Navigate to="/login"></Navigate>

};

export default Privateroutes;