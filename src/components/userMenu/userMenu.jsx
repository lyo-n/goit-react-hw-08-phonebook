import React from 'react';
import { connect } from 'react-redux';
import action from '../../redux/auth/action';
import selector from '../../redux/auth/selector';
import { Button } from '@material-ui/core';
import styles from './userMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
    <div className={styles.userMenu}>
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>{name}</span>
      <Button
      className={styles.btn}
        variant="contained"
        color="secondary"
        type="button"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
    </div>
  );

const mapStateToProps = state => ({
    name: selector.usersName(state),
    avatar: 'http://img1.joyreactor.cc/pics/comment/coub-shark-3016959.jpeg',
});
  
export default connect(mapStateToProps, { onLogout: action.logoutUser })(
    UserMenu,
);
  