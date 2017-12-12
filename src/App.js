import React, {Component} from 'react';
import {connect} from 'react-redux';
import Launch from './components/Launch';
import './App.css';

class App extends Component {
    render() {
        return (
            <Launch/>
        );
    }
}

export default connect(
    (state) => (state)
)(App);