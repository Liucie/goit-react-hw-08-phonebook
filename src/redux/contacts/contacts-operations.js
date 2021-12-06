import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

// export const getContactsThunk = createAsyncThunk('contacts/fetchContacts',
// async(_, {rejectWithValue}) =>{
//     try{
//         const {result} = await api.contacts.getContacts();
//         console.log(result);
//         return result
//     }
//     catch(err){
//         toast.error('Something went wrong!')
//         return rejectWithValue(err);
//     }
// }
// );
// export const addContactThunk = createAsyncThunk('contacts/addContact',
// async(contact, {rejectWithValue}) => {
//     try{
//         const {data} = await api.contacts.addContact(contact);
//         toast.success('You have added a contact successfully!')
//         return data;
//     }
//     catch(err){
//         toast.error('Something went wrong!Try again!')
//         rejectWithValue({error: err.message});
//     }
// });
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success('You have added a contact successfully!');
      return data;
    } catch (err) {
      toast.error('Something went wrong!Try again!');
      rejectWithValue(err);
    }
  },
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      toast.success('You have deleted a contact successfully!');
      return contactId;
    } catch (err) {
      toast.error('Something went wrong!Try again!');
      rejectWithValue(err);
    }
  },
);

// export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
// async(contactId, {rejectWithValue}) =>{
//     try{
//         const {result}=await api.contacts.deleteContact();
//         toast.success('You have deleted a contact successfully!');
//         return result;
//     }
//     catch(err){
//             toast.error('Something went wrong!Try again!')
//             rejectWithValue({error: err.message});
//     }
// });
