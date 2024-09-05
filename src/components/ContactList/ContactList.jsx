import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/selectors';
import toast from 'react-hot-toast';
import styles from './ContactList.module.css'; // Імпортуйте стилі

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter) || ''; // Перевірка на undefined
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
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactListItem}>
          <span>{name}: {number}</span>
          <button className={styles.contactListButton} onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
