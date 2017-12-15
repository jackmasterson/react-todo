describe('async actions', () => {
    it('will be tested later', () => {
        expect(true).toEqual(true);
    })
})
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../actions/todo-actions'
// import * as types from '../types/todo-types'
// import fetchMock from 'fetch-mock'

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//     afterEach(() => {
//         fetchMock.reset()
//         fetchMock.restore()
//     })

//     it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//         fetchMock
//             .getOnce('/todos', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })


//         const expectedActions = [
//             { type: types.FETCH_TODOS_REQUEST },
//             { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//         ]
//         const store = mockStore({ todos: [] })

//         return store.dispatch(actions.fetchTodos()).then(() => {
//             // return of async actions
//             expect(store.getActions()).toEqual(expectedActions)
//         })
//     })
// })