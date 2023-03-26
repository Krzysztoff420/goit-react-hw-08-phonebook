import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from 'redux/auth/selectors';
import { signOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOut());

  return (
    <div className={css.userMenu}>
      <p>{email}</p>
          <button className={css.button} onClick={handleSignOut}>Sign out</button>
    </div>
  );
};