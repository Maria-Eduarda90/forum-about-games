import { Outlet, Navigate } from 'react-router-dom';

export function PrivateRouter() {
    const useAuth = () => {
        const token = localStorage.getItem('@Forum:Token');
        if (token) {
            return true;
        } else {
            return false
        }
    }

    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/" />
}