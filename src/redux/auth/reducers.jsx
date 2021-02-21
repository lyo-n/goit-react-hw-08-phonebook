import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionOperations from './actionOperations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [actionOperations.registerSuccess]: (_, {payload}) => payload.user,
    [actionOperations.loginSuccess]: (_, {payload}) => payload.user,
    [actionOperations.getCurrentSuccess]: (_, {payload}) => payload,
    [actionOperations.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
    [actionOperations.registerSuccess]: (_, { payload }) => payload.token,
    [actionOperations.loginSuccess]: (_, { payload }) => payload.token,
    [actionOperations.logoutSuccess]: () => null,
});

const error = createReducer(null, {
    [actionOperations.registerError]: (_, {payload}) => payload,
    [actionOperations.loginError]: (_, {payload}) => payload,
    [actionOperations.logoutError]: (_, {payload}) => payload,
    [actionOperations.getCurrentError]: (_, {payload}) => payload,
});

export default combineReducers({user, token, error,});