import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services/connections-api';

export const signUpThunk = createAsyncThunk(
  'user/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await api.user.signUpUser(user);
      api.token.set(data.token);
      toast.success('You have successfully registered!');
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
      toast.error('Error! You are not registered! Try again!');
    }
  },
);

export const logInThunk = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await api.user.loginUser(user);
      api.token.set(data.token);
      toast.success('You are logged in! Welcome!');
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
      toast.error('Error! Try again!');
    }
  },
);

export const currentUserThunk = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    console.log(state.auth.token);

    if (persistedToken === null) {
      return rejectWithValue();
    }
    api.token.set(persistedToken);
    try {
      const { data } = await api.user.getCurrentUser();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.user.logoutUser();
      api.token.unset();
      console.log(data);
      toast.info('You are logout!');
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);
