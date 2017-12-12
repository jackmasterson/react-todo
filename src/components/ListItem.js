import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toDoSelected} from '../reducers/action-reducer';

class ListItem extends Component {
    onSelect(val) {
        this.props.toDoSelected(val);
    }
    render() {
        if (this.props.actions.totalToDos.length > 0) {
            return (
                <div>
                    {this.props.actions.totalToDos.map(info =>
                        <p 
                            className={'list-item ' + info.name}
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