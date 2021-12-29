import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { AuthProvider } from './context/AuthContext';

export function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}