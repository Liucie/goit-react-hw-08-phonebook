import s from './ContactList.module.css';
import Loader from 'react-loader-spinner';
import { ContactsItem } from './ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts/contacts-selectors';
import { ToastContainer } from 'react-toastify';
import { getContactsThunk } from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';

export function ContactList() {
  //    const token = useSelector(state=>state.auth.token);

  const contacts = useSelector(contactsSelectors.contacts);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const filter = useSelector(contactsSelectors.filter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContactsThunk()), [dispatch]);

  return (
    <>
      {isLoading && (
        <Loader type="Puff" color="#ff4f79" height={40} width={40} />
      )}
      {contacts && !isLoading && (
        <ul className={s.list}>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map(({ name, id, number }) => (
              <li key={id} className={s.item}>
                <ContactsItem
                  id={id}
                  name={name}
                  number={number}
                ></ContactsItem>{' '}
              </li>
            ))}
        </ul>
      )}
      <ToastContainer />
    </>
  );
}
