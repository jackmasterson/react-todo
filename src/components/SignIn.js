import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestSignIn} from '../reducers/todo-reducer';
import Launch from './Launch';

class SignIn extends Component {
    // new user will be submitted with password and username;
    // request sign in will be initialized
    submit(newUser) {
        let un = document.getElementById('username').value;
        let pw = document.getElementById('password').value;
        this.props.requestSignIn(un, pw, newUser);
    }
    // if the user is authed, it will return the user to the Launch screen
    // if the user is new, it will display the new user flow
    // otherwise, it will render the initial log in screen
    render() {
        if (this.props.todo.authed) {
            sessionStorage.setItem('authed', true);
            return (
                <Launch />
            )
        } else if (sessionStorage.getItem('new-user')) {
            return (
                <div>
                    <div>Looks like a new user - welcome. If not, you're typing in a user name that doesn't exist.</div>
                    <div>
                        <input 
                            placeholder="Enter username"
                            type="textbox"
                            id="username"/>
                        <input 
                            placeholder="Enter password"
                            type="textbox"
                            id="password"/>
                        <button onClick={() => this.submit(true)}>Submit</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <input 
                        placeholder="Enter username"
                        type="textbox"
                        id="username"/>
                    <input 
                        placeholder="Enter password"
                        type="textbox"
                        id="password"/>
                    <button onClick={() => this.submit()}>Submit</button>
                </div>
            );
        }

    }
}

export default connect(
    (state) => (state),
    {requestSignIn}
)(SignIn);