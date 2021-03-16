import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import Registration from '../../routes/Registration/Registration'
import Home from '../../routes/Home/Home'
import Login from '../../routes/Login/Login'
import Welcome from '../../routes/Welcome/Welcome'
import './App.css'
import PrivateOnlyRoute from '../PrivateOnlyRoute/PrivateOnlyRoute'
import TokenService from '../../services/token-service'
import TrailSearch from '../../routes/TrailSearch/TrailSearch'

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
              path={'/home'}
              component={Home}
            />
            <PublicOnlyRoute 
              path={'/join'}
              component={Registration}  
            />
            <PublicOnlyRoute 
              path={'/login'}
              component={Login}
            />
            <PrivateOnlyRoute 
              path={'/welcome'}
              component={Welcome}
            />
            <Route exact path={'/'}>
              <Redirect to={TokenService.hasAuthToken()
                ? '/trails'
                : '/home'} />
            </Route>
            <PrivateOnlyRoute 
              path={'/trails'}
              component={TrailSearch}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
