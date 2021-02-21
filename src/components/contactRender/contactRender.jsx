import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from '../../redux/contacts/selectors';
import actions from '../../redux/contacts/actions';
import styles from './contactRender.module.css';
import ContactForm from '../contactForm/contactFormContainer';
import Filter from '../filter/filterContainer';
import ContactList from '../contacts/contactsContainer';

class ContactsRender extends Component {
    componentDidMount() {
      this.props.fetchOnContacts();
    }
  
    render() {
        const { contacts } = this.props;
        return (
          <div className={styles.contactList}>
            <ContactForm />
            {contacts && contacts.length > 1 && <Filter />}
            <h2>Contacts</h2>
            <ContactList />
          </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      contacts: selectors.getContacts(state),
    };
  };
  
  const mapDispatchToProps = dicpatch => ({
    fetchOnContacts: () => dicpatch(actions.fetchContacts()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactsRender);
  