import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className='container'>
      <div className='row  m-3'>
        <div className='col-sm-3'>
          <i className='fa fa-5x fa-user-circle'></i>
          <h1 className='m-2'>{user.username}</h1>
        </div>
        <div className='col'>
          <h1>Test1</h1>
        </div>
      </div>
    </div>
  )
}

export default Profile
