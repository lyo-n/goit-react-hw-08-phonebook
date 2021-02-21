import { connect } from 'react-redux';
import ContactForm from './contactForm';

const mapStateToProps = state => ({
    state,
  });
  
export default connect(mapStateToProps)(ContactForm);
  
