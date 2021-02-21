import {createAction} from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction ('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentRequest = createAction('auth/getCurrentRequest');
const getCurrentSuccess = createAction('auth/getCurrentSuccess');
const getCurrentError = createAction('auth/getCurrentError');

// const authAction = 
export default  {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentRequest,
    getCurrentSuccess,
    getCurrentError
};

// export default authAction;