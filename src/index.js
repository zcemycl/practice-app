import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux';
import allReducer from './reducers'
import {Provider} from 'react-redux'
import AuthContextProvider from './contexts/AuthContext';

const store = createStore(allReducer);

ReactDOM.render(<AuthContextProvider><Provider store={store}><App/></Provider>
</AuthContextProvider>, document.getElementById("root"))
