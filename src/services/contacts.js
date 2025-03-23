import Contacts from '../models/contacts.js';

export async function getAllContacts() {
  try {
    return await Contacts.find();
  } catch (error) {
    console.error('Ошибка при получении контактов:', error);
  }
}

export async function getContactById(id) {
  const contact = await Contacts.findById(id);
  return contact;
}
