import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const Authenticated = false; 
    
    return Authenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
