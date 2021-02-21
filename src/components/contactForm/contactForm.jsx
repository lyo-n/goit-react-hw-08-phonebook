import React, {useState} from 'react';
import styles from './contactForm.module.css';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import actions from '../../redux/contacts/actions';

const ContactForm = ({state}) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const changeName= ({target}) => setName(target.value); 

    const [number, setNumber] = useState('');
    const changeNumber = ({target}) => setNumber(target.value);

    const inputSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
        const { arrayItems } = state.contacts;
        if (arrayItems && arrayItems.find(contact => name === contact.name)) {
            alert('Такой пользователь уже есть в Вашей телефонной книге!!!');
        } else {
            dispatch(actions.addContact(name, number));
        }
        setName('');
        setNumber('');
    };
     
        
    return (            
            <form onSubmit={inputSubmit} className={styles.form}> 
                <div className={styles.formBlock}>
                <label className={styles.label}>
                    Name
                    <TextField  className={styles.inpt}
                            type="text"
                            name="name"
                            value={name}     
                            onChange={changeName}                              
                    />
                </label>
                <label className={styles.label}>
                    Number
                    <TextField  className={styles.inpt}
                            type="text"
                            name="number"
                            value={number}
                            onChange={changeNumber}
                    />
                </label>
                </div>
                <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 4, padding: 4 }}
                type="submit"
                >
                    Add contact
                </Button>
            </form>
    );
};

export default ContactForm;
