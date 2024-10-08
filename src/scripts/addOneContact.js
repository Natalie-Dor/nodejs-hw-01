import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {};
try {
  const data = await fs.readFile(PATH_DB, 'utf8');
  const contacts = JSON.parse(data);
  const newContact = createFakeContact();
  contacts.push(newContact);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), 'utf-8');
} catch (error) {
  console.error('Error:', error);
}
addOneContact();
