import React from 'react';
import styles from './contactItem.module.css';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';


const ContactItem = 
    ({ contact: {name, number }, removeOnContact }) => {
            return(
            <li className={styles.item}>
            {name}: {number}
            {<Button 
                className={styles.btn} 
                type="button" 
                variant="outlined" color="secondary"
                onClick={removeOnContact}>
                    Delete
            </Button>}
        </li>
        );
    };

ContactItem.propTypes = {
    removeOnContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
        }),
    ),
};
export default ContactItem;
