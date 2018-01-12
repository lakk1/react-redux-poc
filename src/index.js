import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

import App from './components/containers/App';
import marketplaceReducer from './reducers';

const initialState = {};
const enhancers = [];
const middlewares = [thunk];

// Log state whilde development
if (process.env.NODE_ENV === 'development') {
	const { logger } = require('redux-logger');

	middlewares.push(logger);
}

// Create Store
const store = createStore(
	marketplaceReducer,
	initialState,
	applyMiddleware(...middlewares),
	enhancers,
);

// Render React app to html
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
