import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import css from './signInRegister.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
            Username:
            <input className={css.input} type="text" name="name" />
          </label>
          <label>
            Email:
            <input className={css.input} type="email" name="email" />
          </label>
          <label>
            Password:
            <input className={css.input} type="password" name="password" />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </form>
      </div>
    );
};