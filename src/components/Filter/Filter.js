import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
const filter = useSelector(selectFilter);
  const handleInputChange = evt => {
    const text = evt.target.value;

    dispatch(filterContacts(text));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onInput={handleInputChange}
      ></input>
    </label>
  );
};
