import { createContext, ReactNode, useState } from 'react';

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

    function signIn() {
        setAuthenticated(true);
    }

    function signOut() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ authenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };