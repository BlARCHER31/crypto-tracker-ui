import React from 'react'

const RegisterForm = ({
  onChange,
  request,
  name,
  email,
  password,
  username,
}) => {

  return (
    <form onSubmit={request}>
      <React.Fragment>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <input
            id='name'
            type='text'
            className='form-control'
            onChange={onChange}
            value={name}
          />
          <label htmlFor='username' className='form-label'>
            Username:
          </label>
          <input
            id='username'
            type='text'
            className='form-control'
            onChange={onChange}
            value={username}
          />
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            id='email'
            type='email'
            className='form-control'
            value={email}
            onChange={onChange}
          />
          <label htmlFor='password' className='form-label'>
            Password:
          </label>
          <input
            id='password'
            type='password'
            className='form-control'
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Submit'
          className='btn btn-info btn-lg px-4 me-sm-3 fw-bold'
        />
      </React.Fragment>
    </form>
  )
}

export default RegisterForm
