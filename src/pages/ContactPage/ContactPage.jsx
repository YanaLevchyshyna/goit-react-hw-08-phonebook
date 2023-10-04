import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/ContactsFilter/ContactsFilter';
import { Container, Title, EmptyTitle } from './ContactPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

export default function ContactPage() {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const contacts = useSelector(getContacts);

  // Викликаємо операцію
  useEffect(() => {
    // Запуск асинхронної Thunk-дії fetchContacts при монтуванні компонента
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm />
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <EmptyTitle>
          Your contact list is empty. Please add contacts!
        </EmptyTitle>
      )}
      {contacts.length > 0 && <ContactsList />}
      {/* <p> {contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
      <ToastContainer />
    </Container>
  );
}
