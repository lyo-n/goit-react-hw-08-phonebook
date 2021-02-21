import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from '../redux/contacts/selectors';
import action from '../redux/auth/action';
import APP from './APP';

class APPContainer extends Component {
    componentDidMount() {
        this.props.currentUser();
    }
    render() {
        return <APP {...this.props} />;
    }
}

const mapStateToProps = state => {
    return {
        isloadingContacts: selectors.getLoading(state),
    };
};

const mapDispatchToProps = dispatch => ({
    currentUser: () => dispatch(action.getCurrentUser()),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(APPContainer);

