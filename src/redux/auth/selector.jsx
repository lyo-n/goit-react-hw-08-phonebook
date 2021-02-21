const isAuthenticated = state => state.auth.token;
const usersName = state => state.auth.user.name;
const loading = state => state.auth.loading;
const error = state => state.auth.error;

const selector = {
    isAuthenticated,
    usersName, 
    loading, 
    error
};

export default selector;