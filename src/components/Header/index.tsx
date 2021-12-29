import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export function Header() {
    const { signOut } = useAuth();

    return (
        <Container>
            <div>
                <nav>
                    <Link to="/profile">Profile</Link>
                    <Link to="/products">Products</Link>
                </nav>

                <button
                    type="button"
                    onClick={signOut}
                >
                    Logout
                </button>
            </div>
        </Container>
    );
}