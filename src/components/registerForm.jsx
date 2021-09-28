import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import * as userService from '../services/userService'

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
      await userService.register(this.state.data)
    } catch (error) {
      console.log(error.response)
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors }
        if (error.response.data === 'Email already registered.') {
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
      <React.Fragment>
        <h1>Register New User</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('name', 'Name')}
          {this.renderInput('username', 'Username')}
          {this.renderInput('email', 'Email', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Register User')}
        </form>
      </React.Fragment>
    )
  }
}

export default Register
