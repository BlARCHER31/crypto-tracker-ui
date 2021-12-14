import React, { useState, useEffect } from 'react'
import auth from '../../services/authService'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const [user, setUser] = useState(auth.getCurrentUser())
  return (
    <Route
      {...rest}
      render={props => {
        if (!user) return <Redirect to='/login' />
        console.log({ ...props })
        return Component ? <Component user={user} {...props} /> : render(props)
      }}
    />
  )
}

export default ProtectedRoute
