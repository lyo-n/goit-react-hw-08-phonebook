import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  action from '../../redux/auth/action';
import { Button, TextField } from '@material-ui/core';
import styles from './registration.module.css';


const SignUp = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const inputName = ({target}) => {
        setName(target.value);
    };

    const [email, setEmail] = useState('');
    const inputEmail = ({target}) => {
        setEmail(target.value);
    };
    
    const [password, setPassword] = useState('');
    const inputPass = ({target}) => {
        setPassword(target.value);
    };

    const inputSubmit = (e) => {
        e.preventSefault();
        dispatch(action.registrationUser({name, email, password}));
    };

return (
    <form className={styles.form}>
      <div className={styles.box}>
        <TextField
          label="name"
          name="name"
          type="text"
          value={name}
          onChange={inputName}
        />
        <br />
        <TextField
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={inputEmail}
        />
        <br />
        <TextField
          error={password.length < 1 || password.length > 6 ? false : true}
          helperText={
            password.length < 1 || password.length > 6
              ? ''
              : 'Нужно минимум 6 символов'
          }
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={inputPass}
        />
      </div>
      <div className={styles.btnBox}>
      <Button
        className={styles.btn}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={inputSubmit}
      >
        Register
      </Button>
      </div>
    </form>
  );
};

export default SignUp;