import css from '../components/Phonebook.module.css';
export const Home = () => {
  return (
    <div className={css.main}>
      <h1>Welcome to Green Phonebook app!</h1>
      <p>Please sign in or register to make your own contact list</p>
    </div>
  );
};
