import React, { useState, useEffect } from 'react'
import mongoDbService from '../services/mongoDbService'

const ProfileTable = ({ id }) => {
  const [table, setTable] = useState()

  useEffect(async () => {
    setTable(await mongoDbService.getPortfolio(id))
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
          <tr>
            <td>{crypto.cryptoName}</td>
            {crypto.purchaseDetails.map(detail => (
              <React.Fragment>
                <td>{detail.buyPrice}</td>
                <td>{detail.amount}</td>
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProfileTable
