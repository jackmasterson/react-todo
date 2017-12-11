import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todo from './reducers/todo-reducer';

const reducer = combineReducers({
    todo: todo,
});

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);