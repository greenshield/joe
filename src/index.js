import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom'
import {createBrowserHistory} from 'history'
export const history = createBrowserHistory()
import { Provider } from 'react-redux'
import rootReducer from './reducers'

ReactDOM.render(
  
  <Router history={history}>
	<Provider store={rootReducer}>
		<App />	
	</Provider>
	</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
