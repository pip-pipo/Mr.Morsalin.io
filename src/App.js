import React from 'react'
import './App.scss'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Home />
      <Switch>
        
      </Switch>
    </Router>
  )
}

export default App
