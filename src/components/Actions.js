import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    actions, 
    addToDo,
    turnEditingOn,
    addEdits,
    deleteToDo,
    crossOffToDo
} from '../reducers/action-reducer';
import {Button} from 'react-bootstrap';

const Action = (action) => { 
    return (
        <Button
            className="button"
            bsStyle={action.style}
            onClick={() => action.handleAction()}
        >{action.type}</Button>
    )
}
class Actions extends Component {
    componentWillMount() {
        this.actions = [{
            type: 'ADD',
            style: 'primary',
            key: 1,
        }, {
            type: 'EDIT',
            style: 'warning',
            key: 2,
        }, {
            type: 'DELETE',
            style: 'danger',
            key: 3,
        }, {
            type: 'MARK COMPLETE',
            style: 'success',
            key: 4,
    }];
    }
    handleAction(action) {
        let selected = this.props.actions.selected;
        let input = document.getElementById('input-to-do');
        let val = input.value;
        if (val && action === 'ADD' && !this.props.actions.editing) {
            this.props.addToDo(this.props.actions.todo, this.props.actions.totalToDos);
            input.value = '';
        } else if (action === 'ADD' && this.props.actions.editing) {
            this.props.addEdits(selected, this.props.actions.todo, this.props.actions.totalToDos);
            this.props.turnEditingOn(false);
            input.value = '';
        } else if (selected && action === 'EDIT') {
            let value = selected.value;
            input.value = value;
            this.props.turnEditingOn(true);
        } else if (selected && action === 'DELETE') {
            this.props.deleteToDo(selected, this.props.actions.totalToDos);
        } else if (selected && action === 'MARK COMPLETE') {
            this.props.crossOffToDo(selected, this.props.actions.totalToDos);
        }
    }
    render() {
        return (
            <div>
                {this.actions.map(action => (
                        <Action
                            handleAction={() => this.handleAction(action.type)}
                            updateToDo={() => this.props.updateToDo()}
                            key={action.key}
                            {...action}
                        />
                    )
                )}
            </div>
        )
    }
}

export default connect(
    (state) => (state),
    {
        actions, 
        addToDo, 
        turnEditingOn, 
        addEdits, 
        deleteToDo, 
        crossOffToDo
    }
)(Actions);