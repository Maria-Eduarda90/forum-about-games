import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './router';
import './styles/global.scss';

export function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
