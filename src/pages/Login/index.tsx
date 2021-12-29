import { FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authenticated, signIn } = useAuth();

    if(authenticated)
        return <Navigate to="/profile" />

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        signIn();
    }

    return (
        <Container>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="E-Mail"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />

                <button type="submit">Login</button>
            </form>
        </Container>
    );
}