import React from 'react'
import { login } from '../services/authService'
import Form from './common/form'
import Joi from 'joi-browser'

class Login extends Form {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
  }
  schema = {
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = async () => {
    const { data } = this.state
    try {
      const { data: jwt } = await login(data.email, data.password)
      localStorage.setItem('token', jwt)
      this.props.history.push('/')
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.email = error.response.data.message
        this.setState({ errors })
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </React.Fragment>
    )
  }
}

export default Login
