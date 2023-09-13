import { ContactWrapper, ListItem } from './ContactItems.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactThunk } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactItems = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  return filteredContacts.map(contact => {
    const { id, name, phone } = contact;
    const handleRemove = () => dispatch(removeContactThunk(id));

    return (
      <ListItem key={id}>
        <ContactWrapper>
          <span>{name}:</span>
          <span>{phone} </span>
        </ContactWrapper>
        <Button type="button" onClick={handleRemove}>
          Delete
        </Button>
      </ListItem>
    );
  });
};
