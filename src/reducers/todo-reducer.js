
import {
    add, 
    updated, 
    deleteThis, 
    crossThisOff, 
    select,
    signIn,
    newUser,
    save,
    fetchToDos
} from '../lib/todoServices';

import * as TodoActions from '../actions/todo-actions';
import * as Types from '../types/todo-types.js';

const initialTodos = [{value: 'make bed', key: 1}];

export const toDoSelected = (val, todos) => {
    return (dispatch) => {
        let selected = select(val, todos);
        dispatch(TodoActions.selectionSubmitted(val));
    }
}

export const updateToDo = (val) => {
    return (dispatch) => {
        dispatch(TodoActions.toDoUpdated(val));
    }
}

export const addToDo = (val, totalTodos) => {
    const todoList = totalTodos || initialTodos;
    return (dispatch) => {
        let addition = add(val, todoList);
        dispatch(TodoActions.toDoSubmitted(val));
        dispatch(TodoActions.updateList(addition));
        dispatch(TodoActions.selectionSubmitted(null));
    }
}

export const addEdits = (val, edits, totalTodos) => {
    const todoList = totalTodos || initialTodos;
    return (dispatch) => {
        let update = updated(val, edits, todoList);
        dispatch(TodoActions.updateList(update));
    }
}

export const turnEditingOn = (val) => {
    return (dispatch) => {
        dispatch(TodoActions.editingOn(val));
    }
}

export const deleteToDo = (val, totalTodos) => {
    return (dispatch) => {
        let deleting = deleteThis(val, totalTodos)
        dispatch(TodoActions.deleted(deleting));
        dispatch(TodoActions.selectionSubmitted(null));
    }
}

export const crossOffToDo = (val) => {
    return (dispatch) => {
        let crossingOff = crossThisOff(val);
        dispatch(TodoActions.crossedOff(crossingOff));
    }
}

export const requestSignIn = (user, password, userIsNew) => {
    return (dispatch) => {
        const proceed = (res) => {
            if (res) {
                dispatch(TodoActions.successfulSignOn(true));
            } else if (userIsNew) {
                dispatch(TodoActions.successfulSignOn(false));
                dispatch(TodoActions.newUserFlow(true));
                newUser(user, password);
            } else {
                dispatch(TodoActions.successfulSignOn(false));
            }
        }
        window.user = user;
        sessionStorage.setItem('user', user);
        signIn(user, password, proceed);
    }
}

export const saveToDatabase = (data, user) => {
    return (dispatch) => {
        const status = ((res) => {
            dispatch(TodoActions.saveComplete(res));
        })
        save(data, user, status);
    }
}

export const getToDos = () => {
    return (dispatch) => {
        const callback = (res) => {
            dispatch(TodoActions.fetchedToDos(res));
        }
        fetchToDos(callback)
    }
}

export default (state = initialTodos, action) => {
    switch (action.type) {
        case Types.EDITING_ON:
            return {...state, editing: action.payload}
        case Types.UPDATE_LIST:
            return {...state, totalToDos: action.payload}
        case Types.SELECT_TO_DO:
            return {...state, selected: action.payload }
        case Types.SUBMIT_TO_DO:
            return {...state, todo: action.payload}
        case Types.UPDATE_TO_DO:
            return {...state, todo: action.payload}
        case Types.DELETE_TO_DO:
            return {...state, totalToDos: action.payload}
        case Types.CROSS_OFF_TO_DO:
            return {...state, crossedOff: [...action.payload]}
        case Types.SUCCESSFUL_SIGN_ON:
            return {...state, authed: action.payload}
        case Types.NEW_USER_SIGN_ON:
            return {...state, newUserSignOn: true}
        case Types.SAVE_COMPLETE:
            return {...state, saveComplete: action.payload}
        case Types.FETCHED_TODOS:
            return {...state, totalToDos: action.payload}
        default:
            return {state, totalToDos: state};
    }
};