import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import reducer from './reducers/reducer.js'

ReactDOM.render(
<BrowserRouter>
	<App />
</BrowserRouter>
	, document.getElementById('root'));
const store = createStore(reducer);
registerServiceWorker();
