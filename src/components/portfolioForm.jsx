import React from 'react'
import AddButton from './common/addButton'

const PortfolioForm = ({ _id, name, buyPrice, amount }) => {
  return (
    <AddButton
      cryptoObject={{
        _id,
        name,
        buyPrice,
        amount,
      }}
    />
  )
}

export default PortfolioForm
