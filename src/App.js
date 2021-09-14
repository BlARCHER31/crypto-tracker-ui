import { Redirect, Route, Switch } from 'react-router-dom'
import Register from './components/register'
import NavBar from './components/navBar'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Login from './components/login'
import CryptoPrices from './components/cryptoPrices'

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route path='/prices' component={CryptoPrices} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </div>
  )
}

export default App
