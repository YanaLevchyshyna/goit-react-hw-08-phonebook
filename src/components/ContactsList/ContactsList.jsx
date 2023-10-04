import { useSelector } from 'react-redux';

import { selectContactBySearch } from 'redux/contacts/contacts-selectors';

import ContactItem from 'components/ContactItem/ContactItem';

import { ContactsListWrapp, List, ListItem } from './ContactsList.styled';

export default function ContactsList() {
  const contacts = useSelector(selectContactBySearch);
  // console.log('contacts ==>', contacts);

  return (
    <ContactsListWrapp>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <ListItem key={id}>
              <ContactItem name={name} phone={number} id={id} />
            </ListItem>
          );
        })}
      </List>
    </ContactsListWrapp>
  );
}
