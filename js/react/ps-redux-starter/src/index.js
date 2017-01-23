import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './redux/reducers'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = createStore(
		rootReducer,
		applyMiddleware( reduxImmutableStateInvariant() )
	)

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={Routes} />
	</Provider>,
	document.getElementById('app')
)