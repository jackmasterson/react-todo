import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItems from './ListItems';
import Actions from './Actions';
import Input from './Input';
import SignIn from './SignIn';

class Launch extends Component {
    handleChange(updateToDo) {
        let val = document.getElementById('input-to-do').value;
        updateToDo(val);
    }
    // if the user has signed in, it renders the input, list items, and actions
    // otherwise, it redirects them to sign in screen
    render() {
        if (sessionStorage.getItem('authed')) {
            return (
                <div>
                    <Input
                        handleChange={this.handleChange}
                    />
                    <ListItems/>
                    <Actions/>
                </div>
            )
        } else {
            return (
                <SignIn/>
            )
        }
    }
}

export default connect(
    (state) => (state)
)(Launch);