import React from 'react'
import Form from './common/form'
import Joi from 'joi-browser'
import mongoDbService from '../services/mongoDbService'

class RemoveFromPortfolio extends Form {
  state = {
    data: {
      amount: 0,
    },
    objId: this.props.objId,
    errors: {},
  }

  schema = {
    amount: Joi.number()
      .min(0.000001)
      .max(this.props.maxAmount)
      .label('Amount Sold'),
  }

  doSubmit = async () => {
    const { amount } = this.state.data
    const { objId, username, cryptoName, maxAmount } = this.props
    try {
      if (amount === maxAmount) {
        await mongoDbService.deletePortfolioItem(username, objId)
        alert(`${cryptoName} successfully removed from your portfolio.`)
        window.location.reload()
      } else {
        await mongoDbService.decreasePortfolioAmount(amount, objId, username)
        alert(
          `${amount} ${cryptoName} successfully removed from your portfolio.`
        )
        window.location.reload()
      }
    } catch (err) {
      alert(err)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('amount', 'Amount Sold')}
          {this.renderButton('Remove From Portfolio')}
        </form>
      </div>
    )
  }
}

export default RemoveFromPortfolio
