import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function AuthenticationChecker() {
    const { authenticated } = useAuth();

    if(!authenticated)
        return <Navigate to="/" />

    return (
        <>
            <Outlet />
        </>
    );
}