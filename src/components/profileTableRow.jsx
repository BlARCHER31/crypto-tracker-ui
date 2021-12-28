import React, { useEffect, useState } from 'react'
import fetchCurrentPrice from '../services/cryptoCurrentPrice'
import calculateTotalWorth from '../utils/calculateWorth'
import Loading from './common/loading'
import RemoveFromPortfolio from './removeFromPortfolioForm'

const ProfileTableRow = ({ info, username }) => {
  const [currentPrice, setCurrentPrice] = useState(null)
  const [showRemoveForm, setShowRemoveForm] = useState(false)

  function onShowRemoveForm() {
    if (showRemoveForm === false) {
      setShowRemoveForm(true)
    } else {
      setShowRemoveForm(false)
    }
  }

  useEffect(() => {
    fetchCurrentPrice.getCryptoPrice(info.cryptoName).then(setCurrentPrice)
  }, [info])

  return (
    <React.Fragment>
      <tr>
        <td key={info.cryptoName}>{info.cryptoName}</td>
        <td key={info.amount}>{info.amount}</td>
        <td key={info.cryptoName + '1'}>{currentPrice ?? <Loading />}</td>
        <td>
          {currentPrice ? (
            calculateTotalWorth(info.amount, currentPrice)
          ) : (
            <Loading />
          )}
        </td>
        <td>
          <button onClick={onShowRemoveForm} className='btn btn-danger'>
            -
          </button>
        </td>
      </tr>
      {showRemoveForm ? (
        <tr className='d-flex'>
          <td key={info.amount - 1} colSpan={4}>
            <RemoveFromPortfolio
              cryptoName={info.cryptoName}
              objId={info._id}
              username={username}
              maxAmount={info.amount}
            />
          </td>
        </tr>
      ) : null}
    </React.Fragment>
  )
}

export default ProfileTableRow
