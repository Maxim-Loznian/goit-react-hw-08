import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filters/selectors';
import toast from 'react-hot-toast';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success('Contact deleted successfully'))
      .catch(error => toast.error(error.message));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
