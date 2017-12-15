import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    actions, 
    addToDo,
    turnEditingOn,
    addEdits,
    deleteToDo,
    crossOffToDo
} from '../reducers/todo-reducer';
import {Button} from 'react-bootstrap';

// Action receives an action when rendered, which contains the type of action,
// what function it should run when clicked, the style for bootstrap, and a unique key
const Action = (action) => { 
    return (
        <Button
            className="button"
            bsStyle={action.style}
            onClick={() => action.handleAction()}
        >{action.type}</Button>
    )
}

export class Actions extends Component {
    componentWillMount() {
        this.actions = [{
            type: 'ADD',
            run: (() => {
                this.add();
            }),
            style: 'primary',
            key: 1,
        }, {
            type: 'EDIT',
            run: (() => {
                this.edit();
            }),
            style: 'warning',
            key: 2,
        }, {
            type: 'DELETE',
            run: (() => {
                this.deleteIt();
            }),
            style: 'danger',
            key: 3,
        }, {
            type: 'MARK COMPLETE',
            run: (() => {
                this.completed();
            }),
            style: 'success',
            key: 4,
        }];
    }
    // if there is a value in the input, and if we haven't selected
    // anything to edit, then it should add a to do to the to do list
    // and clear the input value
    add() {
        let selected = this.props.todo.selected;
        let input = document.getElementById('input-to-do');
        let val = input.value;

        if (val && !this.props.todo.editing) {
            this.props.addToDo(this.props.todo.todo, this.props.todo.totalToDos);
            input.value = '';
        } 
    }

    // if an item is selected for editing, the edits should be added,
    // editing should be turned off when edits are added,
    // and the value of the input should be cleared;
    // if an item is selected but we are not yet editing,
    // then we turn on editing and the input value becomes the selected value
    // to make it available to edit
    edit() {
        let selected = this.props.todo.selected;
        let input = document.getElementById('input-to-do');
        let val = input.value;

        if (this.props.todo.editing) {
            this.props.addEdits(selected, this.props.todo.todo, this.props.todo.totalToDos);
            this.props.turnEditingOn(false);
            input.value = '';
        } else if (selected) {
            let value = selected.value;
            input.value = value;
            this.props.turnEditingOn(true);
        } 
    }

    // if an item is selected when delete is pressed, then it will delete
    // the todo 
    deleteIt() {
        let selected = this.props.todo.selected;
        let input = document.getElementById('input-to-do');
        let val = input.value;

        if (selected) {
            this.props.deleteToDo(selected, this.props.todo.totalToDos);
        } 
    }

    // if an action is selected when Mark Complete is pressed
    // then it will cross off the to do and turn it green
    completed() {
        let selected = this.props.todo.selected;
        let input = document.getElementById('input-to-do');
        let val = input.value;
        
        if (selected) {
            this.props.crossOffToDo(selected, this.props.todo.totalToDos);
        }
    }

    // renders the action buttons;
    // receives the handleAction prop which runs the action's corresponding
    // method;
    // also receives the udpateToDo which allows the to do to update on kepyress
    render() {
        return (
            <div>
                {this.actions.map(action => (
                        <Action
                            handleAction={() => action.run()}
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