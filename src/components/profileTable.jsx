import React, { useState, useEffect } from 'react'
import mongoDbService from '../services/mongoDbService'
import ProfileTableRow from './profileTableRow'

const ProfileTable = ({ id, username, cryptoId }) => {
  const [table, setTable] = useState()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const fetchUserPortfolio = async () => {
      try {
        const userPortfolio = await mongoDbService.getPortfolio(id)
        if (userPortfolio.length === 0) return null
        setTable(userPortfolio)
      } catch (error) {
        setErrors(error)
      }
    }
    fetchUserPortfolio()
  }, [])

  return !table ? (
    <p>Add Cryptos to your portfolio to display them here.</p>
  ) : (
    <table className='table'>
      <thead className='table-dark'>
        <tr>
          <th>Ticker</th>
          <th>Amount</th>
          <th>Current Price</th>
          <th>Total Worth</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {table.map(crypto => (
          <ProfileTableRow
            username={username}
            info={crypto}
            cryptoId={cryptoId}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ProfileTable
