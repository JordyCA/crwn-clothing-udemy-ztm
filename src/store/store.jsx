//** Libraries */
import {
    compose, 
    legacy_createStore as createStore,
    applyMiddleware
} from 'redux';
import {  persistStore, persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';

// import logger from 'redux-logger';

//** reducers */
import { rootReducer } from './root-reducer';

const persistConfg = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfg, rootReducer);

// curry function 
const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('%cstore.jsx line:19 Type', 'color: #007acc;', action.type);
    console.log('%cstore.jsx line:20 payload', 'color: #007acc;', action.payload);
    console.log('%cstore.jsx line:21 currentSate', 'color: #007acc;', store.getState());

    next(action);

    console.log('%cstore.jsx line:25 nextAction', 'color: #007acc;', store.getState());
} 

const middleWares =  [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);