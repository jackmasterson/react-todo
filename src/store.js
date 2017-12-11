import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({});

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);