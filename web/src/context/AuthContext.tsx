import { createContext, ReactNode, useState } from 'react';
import api from '../api/api';
import { SignInProps } from '../data/@types/SignIn';
import { SignUpProps } from '../data/@types/SignUp';
import { UserProps } from '../data/@types/User';

type ContextData = {
    user: UserProps | null;
    userSignIn: (userData: SignInProps) => Promise<UserProps>;
    userSignUp: (userData: SignUpProps) => Promise<UserProps>;
    userSignOut: () => void;
    getCurrentUser: () => Promise<UserProps>;
}

type ElementChildren = {
    children: ReactNode;
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider = ({ children }: ElementChildren) => {
    const [user, setUser] = useState<UserProps | null>(null);

    const userSignIn = async (userData: SignInProps) => {
        localStorage.clear();
        const { data } = await api.post("api/login", userData);

        if (data.token) {
            localStorage.setItem('@Forum:Token', data.token);
        }

        return getCurrentUser();
    }

    const userSignOut = () => {
        setUser(null);
        localStorage.removeItem('@Forum:Token');
        window.location.href = '/';
    }

    const getCurrentUser = async () => {
        const { data } = await api.get("api/user")
        setUser(data)
        localStorage.setItem('@Forum:User', JSON.stringify(user));
        return data;
    }

    const userSignUp = async (userData: SignUpProps) => {
        const { data } = await api.post("api/user", userData);

        return data;
    }

    return (
        <AuthContext.Provider value={
            {
                user,
                userSignIn,
                getCurrentUser,
                userSignUp,
                userSignOut,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}