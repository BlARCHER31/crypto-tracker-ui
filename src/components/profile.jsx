import React from 'react'

import ProfileTable from './profileTable'
import AddToPortfolioForm from './addToPortfolioForm'

const Profile = ({ user }) => {
  const { username, _id } = user
  return (
    <div className='container'>
      <div className='row  m-3'>
        <div className='col-sm-3'>
          <i className='fa fa-5x fa-user-circle'></i>
          <h1 className='m-2'>{username}</h1>
        </div>
        <div className='col'>
          <h1>Portfolio</h1>
          {<ProfileTable id={_id} />}
        </div>
      </div>
      {<AddToPortfolioForm id={_id} />}
    </div>
  )
}

export default Profile
