import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateToDo} from '../reducers/todo-reducer';

// renders the Input component, where users put in their todos
// also handles a change, updating the state with each keypress
export class Input extends Component {
    render() {
        return(
            <input
                id="input-to-do"
                type="textbox"
                placeholder="Add a to-do"
                onChange={() => this.props.handleChange(this.props.updateToDo)}
            />
        );
    }
}

export default connect(
    (state) => (state),
    {updateToDo}
)(Input);