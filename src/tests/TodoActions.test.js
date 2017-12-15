import * as actions from '../actions/todo-actions'
import * as types from '../types/todo-types'

describe('actions', () => {
    it('should create an action to submit a todo', () => {
        const text = 'Finish docs'
        const expectedAction = {
            type: types.SUBMIT_TO_DO,
            payload: text
        }
        expect(actions.toDoSubmitted(text)).toEqual(expectedAction)
    });
    it('should create an action to update a todo', () => {
        const text = 'Finish docs'
        const expectedAction = {
            type: types.UPDATE_TO_DO,
            payload: text
        }
        expect(actions.toDoUpdated(text)).toEqual(expectedAction)
    });
    it('should create an action to select a todo', () => {
        const text = 'Todo Selected';
        const expectedAction = {
            type: types.SELECT_TO_DO,
            payload: text
        }
        expect(actions.selectionSubmitted(text)).toEqual(expectedAction)
    });
    it('should create an action to update the list', () => {
        const addition = 'Added this todo';
        const expectedAction = {
            type: types.UPDATE_LIST,
            payload: addition
        }
        expect(actions.updateList(addition)).toEqual(expectedAction)
    });
    it('should create an action to turn editing on', () => {
        const editing = 'this todo will be edited';
        const expectedAction = {
            type: types.EDITING_ON,
            payload: editing
        }
        expect(actions.editingOn(editing)).toEqual(expectedAction)
    });
    it('should create an action to delete a todo', () => {
        const deleteToDo = 'this todo will be deleted';
        const expectedAction = {
            type: types.DELETE_TO_DO,
            payload: deleteToDo,
        }
        expect(actions.deleted(deleteToDo)).toEqual(expectedAction)
    });
    it('should create an action to mark a todo complete', () => {
        const markComplete = 'this todo will be marked complete';
        const expectedAction = {
            type: types.CROSS_OFF_TO_DO,
            payload: markComplete
        }
        expect(actions.crossedOff(markComplete)).toEqual(expectedAction);
    });
    it('should create an action to register a successful sign on', () => {
        const message = 'sign on success!';
        const expectedAction = {
            type: types.SUCCESSFUL_SIGN_ON,
            payload: message
        }
        expect(actions.successfulSignOn(message)).toEqual(expectedAction);
    });
    it('should create an action to indicate there is a new user', () => {
        const message = 'new user is signing on';
        const expectedAction = {
            type: types.NEW_USER_SIGN_ON,
            payload: message
        }
        expect(actions.newUserFlow(message)).toEqual(expectedAction);
    });
})