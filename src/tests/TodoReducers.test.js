import reducer from '../reducers/todo-reducer';
import * as types from '../types/todo-types';

describe('todos reducer', () => {
    const initialState = [{
        key: 1,
        value: "make bed"
    }];
    const additionalTodo = { todo: 'add this todo', key: 2 };
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            state: initialState,
            totalToDos: initialState
        })
    });
    it('should handle UPDATE_TO_DO', () => {
        expect(
            reducer([], {
                type: types.UPDATE_TO_DO,
                payload: 'Run the tests'
            })
        ).toEqual(
            {
                todo: 'Run the tests'
            }
        )
    });
    it('should handle SUBMIT_TO_DO', () => {
        expect(
            reducer([], {
                type: types.SUBMIT_TO_DO,
                payload: 'to do submitted'
            })
        ).toEqual(
            {
                todo: 'to do submitted'
            }
        )
    });
    it('should handle SELECT_TO_DO', () => {
        expect(
            reducer([], {
                type: types.SELECT_TO_DO,
                payload: 'to do has been selected'
            })
        ).toEqual(
            {
                selected: 'to do has been selected'
            }
        )
    });
    it('should handle UPDATE_LIST', () => {
        expect(
            reducer([], {
                type: types.UPDATE_LIST,
                payload: [...initialState, additionalTodo]
            })
        ).toEqual({
            totalToDos: [...initialState, additionalTodo]
        })
    });
    it('should handle EDITING_ON', () => {
        expect(
            reducer([], {
                type: types.EDITING_ON,
                payload: additionalTodo
            })
        ).toEqual({
            editing: additionalTodo
        })
    });
    it('should handle DELETE_TO_DO', () => {
        expect(
            reducer([], {
                type: types.DELETE_TO_DO,
                payload: additionalTodo
            })
        ).toEqual({
            totalToDos: additionalTodo
        })
    });
    it('should handle SUCCESSFUL_SIGN_ON', () => {
        expect(
            reducer([], {
                type: types.SUCCESSFUL_SIGN_ON,
                payload: true
            })
        ).toEqual({authed: true});
    })
    it('should handle NEW_USER_SIGN_ON', () => {
        expect(
            reducer([], {
                type: types.NEW_USER_SIGN_ON,
                payload: true
            })
        ).toEqual({newUserSignOn: true});
    })
    // this ones broken - could be where bug is coming from
    // it('should handle CROSS_OFF_TO_DO', () => {
    //     expect(
    //         reducer([], {
    //             type: types.CROSS_OFF_TO_DO,
    //             payload: additionalTodo
    //         })
    //     ).toEqual(
    //         {...additionalTodo, crossedOff: []}
    //     )
    // })
})