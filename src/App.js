import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './components/registerForm'
import NavBar from './components/navBar'
import Footer from './components/footer'
import Login from './components/login'
import Logout from './components/logout'
import CryptoPrices from './components/cryptoPrices'
import Profile from './components/profile'
import HomePage from './components/homepage'
import auth from './services/authService'
import ProtectedRoute from './components/common/protectedRoute'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(auth.getCurrentUser())
  }, [])

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <NavBar user={user} />
        <Switch>
          <ProtectedRoute path='/profile/' component={Profile} user={user} />
          <Route
            path='/prices'
            render={props => <CryptoPrices {...props} user={user} />}
          />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/register' component={Register} />
          <Route path='/' exact component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
