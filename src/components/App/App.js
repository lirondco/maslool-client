import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import Registration from '../../routes/Registration/Registration'
import Home from '../../routes/Home/Home'
import './App.css'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    return (
      <div className = 'App'>
        <Header />
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}
          <Switch>
            <PublicOnlyRoute 
              exact
              path={'/'}
              component={Home}
            />
            <PublicOnlyRoute 
              path={'/join'}
              component={Registration}  
            />
          </Switch>
        </main>
      </div>
    )
  }
}
