import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

const confconf = {
    key: 'root',
    storage,
  }




  
  const sddsds = persistReducer(confconf, rootReducer)

  const store = createStore(sddsds, {}, composeWithDevTools(applyMiddleware(thunk)));
  let persistor = persistStore(store)

  export { store, persistor };
  
