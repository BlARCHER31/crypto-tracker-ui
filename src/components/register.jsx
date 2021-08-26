import React, { Component } from 'react'

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
    console.log(this.state)
  }

  render() {
    return (
      <form action='submit'>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <input
            id='name'
            type='text'
            className='form-control'
            onChange={this.handleChange}
          />
          <label htmlFor='username' className='form-label'>
            Username:
          </label>
          <input
            id='username'
            type='text'
            className='form-control'
            onChange={this.handleChange}
          />
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            id='email'
            type='email'
            className='form-control'
            onChange={this.handleChange}
          />
          <label htmlFor='password' className='form-label'>
            Password:
          </label>
          <input
            id='password'
            type='password'
            className='form-control'
            onChange={this.handleChange}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Sign Up
        </button>
        <a className='btn btn-info'>
          Already Have An Account
        </a>
      </form>
    )
  }
}

export default Register
