import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(emptyContacts, undefined, 2),
      'utf-8',
    );
    return [];
  } catch (error) {
    console.error('Error:', error);
  }
};

removeAllContacts();
