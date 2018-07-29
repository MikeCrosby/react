import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './store/reducers/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// custom logger middleware, so I can track state
/* const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching', action)
            const result = next(action)
            console.log('Middleware] next state', store.getState())
            return result
        }
    }
} */

const store = createStore(rootReducer, applyMiddleware(/* logger, */ thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
