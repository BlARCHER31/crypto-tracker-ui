import React, { useState } from 'react'
import ProfileTable from './profileTable'
import AddToPortfolioForm from './addToPortfolioForm'

const Profile = ({ user }) => {
  const { username, _id } = user
  const [showAddForm, setShowAddForm] = useState(false)
  const [showRemoveForm, setShowRemoveForm] = useState(false)
  let cryptoId = null

  function onShowAddForm() {
    if (showAddForm === false) {
      setShowAddForm(true)
    } else {
      setShowAddForm(false)
    }
  }
  return (
    <div className='container profile'>
      <div className='row'>
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

          <div className='overflow-scroll'>
            {<ProfileTable username={username} id={_id} cryptoId={cryptoId} />}
          </div>
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
