import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../redux/auth/auth-thunks';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/auth-selectors';
import { Navigate } from 'react-router';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const nameChange = e => {
    setName(e.target.value);
  };

  const emailChange = e => {
    setEmail(e.target.value);
  };

  const passwordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(signUpThunk(user));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={nameChange}
          className="input"
        />
        <input
          type="mail"
          name="email"
          value={email}
          placeholder="email"
          onChange={emailChange}
          className="input"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={passwordChange}
          className="input"
        />
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
      {isLoggedIn && <Navigate to="/contacts" />}
      <ToastContainer />
    </>
  );
}
