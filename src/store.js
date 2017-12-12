import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import actions from './reducers/action-reducer';

const reducer = combineReducers({
    actions: actions,
});

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);