import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <h1>{user.username}</h1>
        </div>
        <div className='col'>
          <h1>Test1</h1>
        </div>
      </div>
    </div>
  )
}

export default Profile
