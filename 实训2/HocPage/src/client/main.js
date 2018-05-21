import React from 'react'
import ReactDom from 'react-dom'
import App from './Containers/App'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Redux/reducers';

const store=createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
