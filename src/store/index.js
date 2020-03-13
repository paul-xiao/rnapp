import { createStore } from 'redux';
// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';

// export default createStore(rootReducer, applyMiddleware(thunk));
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
