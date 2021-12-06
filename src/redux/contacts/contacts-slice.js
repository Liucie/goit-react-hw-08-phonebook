import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contacts-operations';

// const initialState={
//     items:[],
//     filter:'',
//     isLoading: false,
//     error: null
// }

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContactsThunk.pending](state) {
      state.isLoading = true;
    },
    [getContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getContactsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContactThunk.pending](state) {
      state.isLoading = true;
    },
    [addContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContactThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactThunk.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    [deleteContactThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
