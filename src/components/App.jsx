import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Register } from '../pages/register';
import { SignIn } from '../pages/sign-in';
import { Phonebook } from '../pages/phonebook';
import { Home } from '../pages/home';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hook/useAuth';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} />}
        />
        <Route
          path="/sign-in"
          element={<RestrictedRoute component={<SignIn />} />}
        />
        <Route
          path="/phonebook"
          element={
            <ProtectedRoute component={<Phonebook />} redirectTo={'/sign-in'} />
          }
        />
      </Route>
    </Routes>
  );
};