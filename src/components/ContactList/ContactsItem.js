import s from './ContactList.module.css';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts/contacts-selectors';
import { deleteContactThunk } from '../../redux/contacts/contacts-operations';

export function ContactsItem({ name, id, number }) {
  const isLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();
  const onDeleting = () => {
    dispatch(deleteContactThunk(id));
  };
  // console.log(id)
  return (
    <>
      {name}: {number}
      <button onClick={onDeleting} type="button" className={s.button}>
        {isLoading ? (
          <Loader type="ThreeDots" color="#093a3e" height={20} width={20} />
        ) : (
          'Delete'
        )}
      </button>
    </>
  );
}
