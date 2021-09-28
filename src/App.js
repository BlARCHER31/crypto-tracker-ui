import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Register from './components/registerForm'
import NavBar from './components/navBar'
import Login from './components/login'
import Logout from './components/logout'
import CryptoPrices from './components/cryptoPrices'
import auth from './services/authService'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends Component {
  state = {}
  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({ user })
  }
  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <div className='container'>
          <Switch>
            <Route path='/prices' component={CryptoPrices} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
