import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Provider from 'react-redux/es/components/Provider';
//как я понял без redux-persist  не удается работать с localStorage
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/localStorage/configureStore';


ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

