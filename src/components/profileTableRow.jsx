import React, { useEffect, useState } from 'react'
import fetchCurrentPrice from '../services/cryptoCurrentPrice'
import Loading from './common/loading'

const ProfileTableRow = ({ info, key }) => {
  const [currentPrice, setCurrentPrice] = useState(null)

  useEffect(() => {
    fetchCurrentPrice.getCryptoPrice(info.cryptoName).then(setCurrentPrice)
  }, [info])
  return (
    <tr key={key}>
      <td>{info.cryptoName}</td>
      <td>{info.averageBuyPrice}</td>
      <td>{info.amount}</td>
      <td>{currentPrice ?? <Loading />}</td>
    </tr>
  )
}

export default ProfileTableRow
