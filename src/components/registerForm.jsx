import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import * as userService from '../services/userService'
import auth from '../services/authService'

class Register extends Form {
  state = {
    data: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    email: Joi.string().email().required().label('Email'),
    name: Joi.string().required().label('Name'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data)
      auth.loginWithJwt(response.headers['x-auth-token'])
      window.location = '/'
    } catch (error) {
      console.log(error)
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors }
        if (error.response.data == 'Email already registered.') {
          errors.email = error.response.data
          this.setState({ errors })
        }
        if (error.response.data === 'Username taken.') {
          errors.username = error.response.data
          this.setState({ errors })
        }
      }
    }
  }

  render() {
    return (
      <div className='container'>
        <h1 className='title'>Register New User</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('name', 'Name')}
          {this.renderInput('username', 'Username')}
          {this.renderInput('email', 'Email', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Register User')}
        </form>
      </div>
    )
  }
}

export default Register
