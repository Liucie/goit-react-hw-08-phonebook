import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  signUpThunk,
  currentUserThunk,
  logOutThunk,
} from './auth-thunks';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUpThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [signUpThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    },
    [signUpThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    },
    [logInThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [logInThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    },
    [logInThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [currentUserThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isFetchingCurrentUser: true,
      };
    },
    [currentUserThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isLoggedIn: true,
        isFetchingCurrentUser: false,
      };
    },
    [currentUserThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
        isFetchingCurrentUser: false,
      };
    },
    [logOutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [logOutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: null, password: null },
        token: null,
        isLoggedIn: false,
      };
    },
    [logOutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});
// export const {renameProp} = authSlice.actions;
export default authSlice.reducer;
