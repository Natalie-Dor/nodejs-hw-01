import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.splice(-1, 1);
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    } else {
      console.log('No contacts to remove.');
    }
    return contacts;
  } catch (error) {
    console.error('Error:', error);
  }
};

removeLastContact();
