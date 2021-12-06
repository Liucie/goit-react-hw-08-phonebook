import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = BASE_URL;
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const signUpUser = async data => {
  return await axios.post('users/signUp', data);
};
const getCurrentUser = async () => {
  return await axios.get('./users/current');
};
const loginUser = async data => {
  return await axios.post('/users/login', data);
};
const logoutUser = async () => {
  return await axios.post('users/logout');
};
const getContacts = async () => {
  return await axios.get('/contacts');
};
const addContact = async data => {
  return await axios.post('/contacts', data);
};
const deleteContact = async id => {
  return await axios.delete(`/contacts/${id}`);
};
// const patchContact = async(data,id)=>{
//     return await axios.patch(`/contacts/${id}`, data);
// };

export const api = {
  user: {
    signUpUser,
    getCurrentUser,
    loginUser,
    logoutUser,
  },
  token,
  contacts: {
    getContacts,
    addContact,
    deleteContact,
  },
};
