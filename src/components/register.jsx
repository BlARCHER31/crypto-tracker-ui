import axios from 'axios'
import React, { Component } from 'react'
import RegisterForm from './registerForm'

class Register extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
  }

  handleChange = event => {
    let id = event.target.id
    this.setState({ [id]: event.target.value })
  }

  handleSubmit = event => {
    const { name, username, email, password } = this.state
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/users/register', {
        name,
        username,
        email,
        password,
      })
      .then(res => {
        console.log(res.header)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  render() {
    const { name, username, email, password } = this.state
    return (
      <RegisterForm
        name={name}
        username={username}
        email={email}
        password={password}
        onChange={this.handleChange}
        request={this.handleSubmit}
      />
    )
  }
}

export default Register
