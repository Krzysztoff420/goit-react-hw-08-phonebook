import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  return (
    <ul className={css.list}>
      <ContactListItem />
    </ul>
  );
};