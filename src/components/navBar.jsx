import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Archer Programming
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <Link className='nav-link' aria-current='page' to='/prices'>
              Crypto Prices
            </Link>

            {!user && (
              <React.Fragment>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <Link className='nav-link' to='/profile'>
                  {user.name}
                </Link>
                <Link className='nav-link' to='/logout'>
                  Logout
                </Link>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
