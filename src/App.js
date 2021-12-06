import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserThunk } from './redux/auth/auth-thunks';
import { useEffect } from 'react';
import { authSelectors } from './redux/auth/auth-selectors';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            {/* <li>
              <Link to = "/contacts">Contacts</Link>
              </li> */}
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" exact element={<PublicRoute component={Home} />} />
          <Route path="/login" element={<PublicRoute component={Login} />} />
          <Route
            path="/register"
            element={<PublicRoute component={Register} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute isAuth={isAuth} component={Contacts} />}
          />
        </Routes>
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
