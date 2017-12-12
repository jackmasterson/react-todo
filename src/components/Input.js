import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateToDo} from '../reducers/action-reducer';

class Input extends Component {
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