import { Navigate } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';

export const RestrictedRoute = ({ component, redirectTo = '/phonebook' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = !isAuthorized && !isRefreshing;

  return shouldRedirect ? component : <Navigate to={redirectTo} />;
};