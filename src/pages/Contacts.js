import { UserMenu } from '../components/UserMenu/UserMenu';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../redux/auth/auth-thunks';
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

export function Contacts() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <>
      <UserMenu handleClick={handleLogout}></UserMenu>
      <p>You can add, delete and filter your contacts.</p>
      <ContactsForm></ContactsForm>
      <Filter></Filter>
      <ContactList />
    </>
  );
}
