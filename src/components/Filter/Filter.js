import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/contacts-slice';
// import {changeFilter} from '../../redux/contacts/contacts-actions';

export function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label className={s.label}>Find contacts by name</label>
      <input
        type="tel"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
        className={s.input}
      />
    </div>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
