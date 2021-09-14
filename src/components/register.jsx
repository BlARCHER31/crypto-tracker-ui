import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import * as userService from './../services/userService'

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
      const result = await userService.register()
      console.log(result)
    } catch (error) {
      console.log(error)
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
