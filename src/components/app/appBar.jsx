import React from 'react';
import { connect } from 'react-redux';
import selector from '../../redux/auth/selector';
import Logo from '../logo/logo';
import Navigation from '../navigation/nav';
import UserMenu from '../userMenu/userMenu';

const AppBar = ({ isAuthenticated}) => {
  return (
    <header>
      <Logo />
      {isAuthenticated ? <UserMenu /> : <Navigation />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selector.isAuthenticated(state)
});


export default connect(mapStateToProps)(AppBar);
