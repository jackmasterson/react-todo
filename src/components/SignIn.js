import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestSignIn} from '../reducers/action-reducer';

class SignIn extends Component {
    submit(newUser) {
        let un = document.getElementById('username').value;
        let pw = document.getElementById('password').value;
        console.log(newUser);
        this.props.requestSignIn(un, pw, newUser);
    }
    render() {
        if (this.props.actions.authed) {
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