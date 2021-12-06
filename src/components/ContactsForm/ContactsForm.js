import { useState } from 'react';
import s from './ContactsForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/contacts-operations';
import { contactsSelectors } from '../../redux/contacts/contacts-selectors';

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.contacts);

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
    };
    if (
      contacts.some(el => el.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContactThunk(contact));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Phone
        <input
          type="tel"
          name="phone"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}
