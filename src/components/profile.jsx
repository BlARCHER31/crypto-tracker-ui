import React, { useState } from 'react'

import ProfileTable from './profileTable'
import AddToPortfolioForm from './addToPortfolioForm'
import RemoveFromPortfolio from './removeFromPortfolioForm'

const Profile = ({ user }) => {
  const { username, _id } = user
  const [showAddForm, setShowAddForm] = useState(false)
  const [showRemoveForm, setShowRemoveForm] = useState(false)
  let cryptoId = null

  function onShowAddForm() {
    setShowAddForm(true)
    setShowRemoveForm(false)
  }

  function onShowRemoveForm() {
    setShowAddForm(false)
    setShowRemoveForm(true)
  }

  return (
    <div className='container'>
      <div className='row  m-4'>
        <div className='col-sm-3'>
          <i className='fa fa-5x fa-user-circle'></i>
          <h1 className='m-2'>{username}</h1>
        </div>
        <div className='col'>
          <div className='row'>
            <h3>
              Portfolio{' '}
              <button
                onClick={() => onShowAddForm()}
                className='btn btn-primary'
              >
                {' '}
                +{' '}
              </button>
            </h3>
          </div>

          {
            <ProfileTable
              username={username}
              id={_id}
              cryptoId={cryptoId}
            />
          }
        </div>
      </div>
      {showAddForm ? (
        <React.Fragment>
          <h3>Add a new crypto to your Portfolio</h3>
          <AddToPortfolioForm id={_id} username={username} />
        </React.Fragment>
      ) : null}
      
    </div>
  )
}

export default Profile
