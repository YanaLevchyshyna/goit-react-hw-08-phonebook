import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  // При успішному запиті повертаємо проміс із даними
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

// ========================= U S E R S ==============================

// ----------------  Signup  -----------------

export async function createUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}
// ------------- Login -----------------------
export async function loginUser(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

// --------------- Logout --------------------

export async function logoutUser(credentials) {
  const { data } = await axios.post('/users/logout');
  return data;
}
