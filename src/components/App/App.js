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
import Trail from '../../routes/Trail/Trail'
import NotFound from '../NotFound/NotFound'

export default class App extends Component {

  render() {
    return (
      <div className = 'App'>
        <Header />
        <main>
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
              exact path={'/trails'}
              component={TrailSearch}
            />
            <PrivateOnlyRoute 
              path={'/trails/:trailId'}
              component={Trail}
            />
            <Route 
              component={NotFound}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
