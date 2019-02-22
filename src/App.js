import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main/Main';
//HashRouter дл статических сайтов
import { HashRouter } from 'react-router-dom';

//Рендеринг Router
class App extends Component {
	render() {
		return (
			<HashRouter basename="/">
				<div className="App">
					<Main />
				</div>
			</HashRouter>
		);
	}
}

export default App;
