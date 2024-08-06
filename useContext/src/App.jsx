import { AuthProvider, useAuth } from './context/AuthContext';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

const AuthenticatedApp = () => {
  const { user } = useAuth();

  return user ? <Dashboard /> : (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
};

export default App;