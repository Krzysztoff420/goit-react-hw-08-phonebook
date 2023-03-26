import { useDispatch } from 'react-redux';
import { signIn } from '../redux/auth/operations';
import css from './signInRegister.module.css';

export const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.main}>
      <form className={css.label} onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email:
          <input className={css.input} type="email" name="email" />
        </label>
        <label>
          Password:
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};