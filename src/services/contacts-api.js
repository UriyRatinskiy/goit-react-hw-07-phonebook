import axios from 'axios';

axios.defaults.baseURL = 'https://64b44dec0efb99d86268f3a9.mockapi.io';

export async function fetchContacts() {
  const response = await axios.get(`/contacts/contacts`);
  return response.data;
}

export async function addContact(newContact) {
  const response = await axios.post(`/contacts/contacts`, newContact);
  return response.data;
}

export async function deleteContact(contactId) {
  const response = await axios.delete(`/contacts/contacts/${contactId}`);
  return response.data;
}
