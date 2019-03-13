import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // для localStorage 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //Redux не работает, если расширение Redux DevTools не установлено

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
  
