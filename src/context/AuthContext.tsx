import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextProps {
    authenticated: boolean;
    signIn: () => void;
    signOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storagedAuthentication = localStorage.getItem('authenticated');

        if(storagedAuthentication)
            setAuthenticated(true);
        
        setLoading(false);
    }, []);

    function signIn() {
        localStorage.setItem('authenticated', JSON.stringify(true));
        setAuthenticated(true);
    }

    function signOut() {
        localStorage.removeItem('authenticated');
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };