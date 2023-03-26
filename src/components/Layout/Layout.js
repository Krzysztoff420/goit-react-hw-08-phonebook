import { Outlet, useNavigate } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../../hook/useAuth';
import css from './Layout.module.css';

export const Layout = () => {
  const { isAuthorized } = useAuth();
  const navigate = useNavigate();

  return (
    <main className={css.container}>
      <nav className={css.nav}>
        {!isAuthorized && (
          <>
            <button className={css.button} onClick={() => navigate('sign-in')}>
              Sign in
            </button>
            <button className={css.button} onClick={() => navigate('register')}>
              Register
            </button>
          </>
        )}
        {isAuthorized && <UserMenu />}
      </nav>
      <Outlet />
    </main>
  );
};
