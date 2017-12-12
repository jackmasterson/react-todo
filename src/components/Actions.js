import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    actions, 
    addToDo,
    turnEditingOn,
    addEdits,
    selectToDo,
    deleteToDo,
    crossOffToDo
} from '../reducers/action-reducer';

const Action = (action) => { 
    return (
        <button
            onClick={() => action.handleAction()}
        >{action.type}</button>
    )
}
class Actions extends Component {
    componentWillMount() {
        this.actions = [{
            type: 'ADD',
            key: 1,
        }, {
            type: 'EDIT',
            key: 2,
        }, {
            type: 'DELETE',
            key: 3,
        }, {
            type: 'MARK COMPLETE',
            key: 4,
    }];
    }
    handleAction(action) {
        let selected = this.props.actions.selected;
        let input = document.getElementById('input-to-do');
        if (action === 'ADD' && !this.props.actions.editing) {
            this.props.addToDo(this.props.actions.todo, this.props.actions.totalToDos);
            input.value = '';
        } else if (action === 'ADD' && this.props.actions.editing) {
            this.props.addEdits(this.props.actions.selected, this.props.actions.todo, this.props.actions.totalToDos);
            this.props.turnEditingOn(false);
            input.value = '';
            this.props.selectToDo(false);
        } else if (action === 'EDIT') {
            let value = selected.value;
            input.value = value;
            this.props.turnEditingOn(true);
        } else if (action === 'DELETE') {
            this.props.deleteToDo(this.props.actions.selected, this.props.actions.totalToDos);
        } else if (action === 'MARK COMPLETE') {
            this.props.crossOffToDo(this.props.actions.selected, this.props.actions.totalToDos);
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
        selectToDo, 
        deleteToDo, 
        crossOffToDo
    }
)(Actions);