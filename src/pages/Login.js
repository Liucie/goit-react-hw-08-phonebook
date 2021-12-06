import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInThunk } from '../redux/auth/auth-thunks';
import { ToastContainer } from 'react-toastify';
import { authSelectors } from '../redux/auth/auth-selectors';
import { Navigate } from 'react-router';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const emailChange = e => {
    setEmail(e.target.value);
  };

  const passwordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(logInThunk(user));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          className="input"
          type="mail"
          name="email"
          placeholder="email"
          value={email}
          onChange={emailChange}
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={passwordChange}
        />
        <button type="submit" className="button">
          Log In
        </button>
      </form>
      {isLoggedIn && <Navigate to="/contacts" />}
      <ToastContainer />
    </>
  );
}
