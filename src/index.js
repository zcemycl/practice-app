import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import App from './App'

const reactContentRoot = document.getElementById("root")

ReactDOM.render(<App browserHistory={createHistory}/>, 
    reactContentRoot)
