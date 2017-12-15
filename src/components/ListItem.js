import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toDoSelected} from '../reducers/todo-reducer';

class ListItem extends Component {
    // when a list item is clicked, it will update the state to 
    // mark itself selected
    onSelect(val) {
        this.props.toDoSelected(val, this.props.todo.totalToDos);
    }
    render() {
        // if there are toodos available, it will render them as a ListItem;
        // otherwise, it will render the 'add a todo' message;
        if (this.props.todo.totalToDos.length > 0) {
            return (
                <div>
                    {this.props.todo.totalToDos.map(info =>
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