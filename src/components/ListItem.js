import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toDoSelected} from '../reducers/action-reducer';

class ListItem extends Component {
    onSelect(val) {
        this.props.toDoSelected(val, this.props.actions.totalToDos);
    }
    render() {
        if (this.props.actions.totalToDos.length > 0) {
            console.log('heres the error: ', this.props.actions.totalToDos);
            return (
                <div>
                    {this.props.actions.totalToDos.map(info =>
                        <p 
                            className={info.complete + ' list-item ' + info.name}
                            key={info.key}
                            onClick={() => this.onSelect(info)}>
                            {info.value}
                        </p>
                    )}
                </div>
            )
        } else {
            return (
                <div>Add a todo!</div>
            )
        }

    }
}

export default connect(
    (state) => (state),
    {toDoSelected}
)(ListItem);