import { authSelectors } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import s from './UserMenu.module.css';

export function UserMenu({ handleClick }) {
  const email = useSelector(authSelectors.getEmail);
  const name = useSelector(authSelectors.getName);
  return (
    <div className={s.container}>
      <p>Welcome, {name}!</p>
      <p>{email}</p>
      <button type="button" onClick={handleClick} className={s.button}>
        Logout
      </button>
    </div>
  );
}
