import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';  // Змінити імпорт CSS

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.contact}>
    <span>{name}: {number}</span>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
