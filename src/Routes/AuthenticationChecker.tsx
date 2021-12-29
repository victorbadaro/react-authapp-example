import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/Header';

export function AuthenticationChecker() {
    const { authenticated } = useAuth();

    if(!authenticated)
        return <Navigate to="/" />

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}