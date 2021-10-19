import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Register from './components/registerForm'
import NavBar from './components/navBar'
import Login from './components/login'
import Logout from './components/logout'
import CryptoPrices from './components/cryptoPrices'
import Profile from './components/profile'
import auth from './services/authService'
import './App.css'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    let active = true

    if (active) {
      setUser(auth.getCurrentUser())
    }
    // return () => {
    //   active = false
    // }
  }, [])

  return (
    <div>
      <NavBar user={user} />
      <div className='container'>
        <Switch>
          <Route
            path='/profile'
            render={() => {
              if (!user) return <Redirect from='/profile' to='/login' />
              return <Profile user={user} />
            }}
          />
          <Route
            path='/prices'
            render={props => <CryptoPrices {...props} user={user} />}
          />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </div>
  )
}

export default App
