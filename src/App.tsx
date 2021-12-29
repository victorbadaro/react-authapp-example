import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { AuthProvider } from './context/AuthContext';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}