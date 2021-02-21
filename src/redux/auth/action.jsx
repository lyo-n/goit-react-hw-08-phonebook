import axios from 'axios';
import actionOperations from './actionOperations';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = '';
    },
};

const registrationUser = credential => dispatch => {
    dispatch(actionOperations.registerRequest());
    axios
        .post('users/signup', credential)
        .then(response => {
            token.set(response.data.token);
            dispatch(actionOperations.registerSuccess(response.data));
        })
        .catch(error => dispatch(actionOperations.registerError(error)));
};

const authorizationUser = credential => dispatch => {
    dispatch(actionOperations.loginRequest());
    axios
        .post('users/login', credential)
        .then(response => {
            token.set(response.data.token);
            dispatch(actionOperations.loginSuccess(response.data));
        })
        .catch(error => dispatch(actionOperations.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
    const {auth: {token: persistToken},
    } = getState();
    if (!persistToken) {
        return;
    }
    token.set(persistToken);
    dispatch(actionOperations.getCurrentRequest());
    axios
        .get('users/current')
        .then(({data}) => dispatch(actionOperations.getCurrentSuccess(data)))
        .catch(error => actionOperations.getCurrentError(error));
};

const logoutUser = () => dispatch => {
    dispatch(actionOperations.logoutRequest());
    axios
        .post('users/logout')
        .then(() => {
            token.unset();
            dispatch(actionOperations.logoutSuccess());
        })
        .catch(error => dispatch(actionOperations.logoutError(error)));
};

const action = {
    registrationUser,
    authorizationUser,
    getCurrentUser,
    logoutUser,
};

export default action;