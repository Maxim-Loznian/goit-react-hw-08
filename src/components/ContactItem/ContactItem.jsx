import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contactItem}>
      <p>{name}: {number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
