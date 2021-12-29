import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Routes';

export function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}