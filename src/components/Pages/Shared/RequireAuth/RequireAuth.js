import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;