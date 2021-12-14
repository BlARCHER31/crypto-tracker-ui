import React, { useState, useEffect } from 'react'
import mongoDbService from '../services/mongoDbService'
import ProfileTableRow from './profileTableRow'

const ProfileTable = ({ id }) => {
  const [table, setTable] = useState()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const fetchUserPortfolio = async () => {
      try {
        const userPortfolio = await mongoDbService.getPortfolio(id)
        setTable(userPortfolio)
      } catch (error) {
        setErrors(error)
      }
    }
    fetchUserPortfolio()
  }, [])

  return !table ? null : (
    <table>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Average Buy Price</th>
          <th>Amount</th>
          <th>Current Price</th>
        </tr>
      </thead>
      <tbody>
        {table.map(crypto => (
          <ProfileTableRow info={crypto} />
        ))}
      </tbody>
    </table>
  )
}

export default ProfileTable
