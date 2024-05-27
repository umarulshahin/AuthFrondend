import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setuserData } from '../Redux/UserSlice';
import { jwtDecode } from 'jwt-decode';

const PrivatRoute = ({ children }) => {

    const dispatch=useDispatch()
    const user=localStorage.getItem('authToken');

    if(user){
     dispatch(setuserData(jwtDecode(user))) 
    }


    return user ? children : <Navigate to="/login" />;
    
};

export default PrivatRoute;
