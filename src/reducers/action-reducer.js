
import {
    add, 
    updated, 
    deleteThis, 
    crossThisOff, 
    select,
    signIn,
    newUser,
} from '../lib/todoServices';

const initialTodos = [{value: 'make bed', key: 1}];

const UPDATE_TO_DO = 'UPDATE_TO_DO';
const SUBMIT_TO_DO = 'SUBMIT_TO_DO';
const SELECT_TO_DO = 'SELECT_TO_DO';
const UPDATE_LIST = 'UPDATE_LIST';
const EDITING_ON = 'EDITING_ON';
const DELETE_TO_DO = 'DELETE_TO_DO';
const CROSS_OFF_TO_DO = 'CROSS_OFF_TO_DO';
const SUCCESSFUL_SIGN_ON = 'SUCCESSFUL_SIGN_ON';
const NEW_USER_SIGN_ON = 'NEW_USER_SIGN_ON';

const toDoUpdated = (val) => ({type: UPDATE_TO_DO, payload: val});
const toDoSubmitted = (val) => ({type: SUBMIT_TO_DO, payload: val});
const selectionSubmitted = (val) => ({type: SELECT_TO_DO, payload: val});
const updateList = (val) => ({type: UPDATE_LIST, payload: val});
const editingOn = (val) => ({type: EDITING_ON, payload: val});
const deleted = (val) => ({type: DELETE_TO_DO, payload: val});
const crossedOff = (val) => ({type: CROSS_OFF_TO_DO, payload: val});
const successfulSignOn = (val) => ({type: SUCCESSFUL_SIGN_ON, payload: val});
const newUserFlow = (val) => ({type: NEW_USER_SIGN_ON, payload: val});

export const toDoSelected = (val) => {
    return (dispatch) => {
        let selected = select(val);
        dispatch(selectionSubmitted(val));
    }
}

export const updateToDo = (val) => {
    return (dispatch) => {
        dispatch(toDoUpdated(val));
    }
}

export const addToDo = (val, totalTodos) => {
    const todoList = totalTodos || initialTodos;
    return (dispatch) => {
        let addition = add(val, todoList);
        dispatch(toDoSubmitted(val));
        dispatch(updateList(addition));
    }
}

export const addEdits = (val, edits, totalTodos) => {
    const todoList = totalTodos || initialTodos;
    return (dispatch) => {
        let update = updated(val, edits, todoList);
        dispatch(toDoSubmitted(val));
        dispatch(updateList(update));
    }
}

export const selectToDo = (val) => {
    return (dispatch) => {
        dispatch(selectionSubmitted(val));
    }
}

export const turnEditingOn = (val) => {
    return (dispatch) => {
        dispatch(editingOn(val));
    }
}

export const deleteToDo = (val, totalTodos) => {
    return (dispatch) => {
        let deleting = deleteThis(val, totalTodos)
        dispatch(deleted(deleting));
    }
}

export const crossOffToDo = (val) => {
    return (dispatch) => {
        let crossingOff = crossThisOff(val);
        dispatch(crossedOff(crossingOff));
    }
}

export const requestSignIn = (user, password, userIsNew) => {
    return (dispatch) => {
        const proceed = (res) => {
            if (res) {
                dispatch(successfulSignOn(true));
            } else if (userIsNew) {
                dispatch(successfulSignOn(false));
                dispatch(newUserFlow(true));
                newUser(user, password);
            } else {
                dispatch(successfulSignOn(false));
            }
        }
        console.log(userIsNew);
        signIn(user, password, proceed);
    }
}

export default (state = initialTodos, action) => {
    switch (action.type) {
        case EDITING_ON:
            return {...state, editing: action.payload}
        case UPDATE_LIST:
            return {...state, totalToDos: action.payload}
        case SELECT_TO_DO:
            return {...state, selected: action.payload }
        case SUBMIT_TO_DO:
            return {...state, todo: action.payload}
        case UPDATE_TO_DO:
            return {...state, todo: action.payload}
        case DELETE_TO_DO:
            return {...state, totalToDos: action.payload}
        case CROSS_OFF_TO_DO:
            return {...state, crossedOff: [...action.payload]}
        case SUCCESSFUL_SIGN_ON:
            return {...state, authed: action.payload}
        case NEW_USER_SIGN_ON:
            return {...state, newUserSignOn: true}
        default:
            return {state, totalToDos: state};
    }
};