import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  action  from '../../redux/auth/action';
import { Button, TextField } from '@material-ui/core';
import styles from './login.module.css';

const LoginMain = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const inputEmail = ({target}) => {setEmail(target.value);};
    
    const [password, setPassword] = useState('');
    const inputPass = ({target}) => {setPassword(target.value);};

    const inputSubmit = (e) => {
        e.preventDefault();
        dispatch(action.authorizationUser({email, password}));
        setEmail('');
        setPassword('');
    };

    return (
        <form className={styles.form}>
        <div className={styles.box}>
          <TextField 
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={inputEmail}/>
          <br />
          <TextField 
            error={password.length < 1 || password.length > 6 ? false : true}
            helperText={
              password.length < 1 || password.length > 6
                ? ''
                : 'Не хватает символов'
            }
            label="password"
            type="password"
            name="password"
            autoComplete="on"
            value={password}
            onChange={inputPass}/>
        </div>
        <div className={styles.btnBox}>
        <Button
          className={styles.btn}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={inputSubmit}>
          Login
        </Button>
        </div>
      </form>
    );
};

export default LoginMain;