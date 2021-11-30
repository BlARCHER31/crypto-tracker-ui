import React, { useEffect, useState } from 'react'
import fetchCurrentPrice from '../services/cryptoCurrentPrice'
import Loading from './common/loading'

const ProfileTableRow = ({ info, key }) => {
  const [currentPrice, setCurrentPrice] = useState(null)

  useEffect(() => {
    fetchCurrentPrice.getCryptoPrice(info.cryptoName).then(setCurrentPrice)
  }, [info])
  return (
    <tr>
      <td key={info.cryptoName}>{info.cryptoName}</td>
      <td key={info.averageBuyPrice}>{info.averageBuyPrice}</td>
      <td key={info.amount}>{info.amount}</td>
      <td key={info.cryptoName + '1'}>{currentPrice ?? <Loading />}</td>
    </tr>
  )
}

export default ProfileTableRow
