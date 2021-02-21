import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
    return (
      <nav className={styles.nav}>
        <NavLink
          exact
          to="/login"
          className={styles.NavigationLink + ' ' + styles.navLink}
          activeClassName={styles.NavigationLinkActive}
        >
          Login
        </NavLink>
        <br />
        <NavLink
          to="/register"
          className={styles.NavigationLink + ' ' + styles.navLink}
          activeClassName={styles.NavigationLinkActive}
        >
          Register
        </NavLink>
      </nav>
    );
  };
  
  export default Nav;