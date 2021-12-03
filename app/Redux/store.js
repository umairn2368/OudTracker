import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers/index';

const storage = createSensitiveStorage({
  keychainService: 'oudtracker',
  sharedPreferencesName: 'oudtracker',
});

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Production
// const store = createStore(persistedReducer, applyMiddleware(ReduxThunk))

// Development
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

let persistor = persistStore(store);

export {store, persistor};
