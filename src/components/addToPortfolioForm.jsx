import React from 'react'
import Form from './common/form'
import Joi from 'joi-browser'
import mongoDbService from '../services/mongoDbService'

class AddToPortfolioForm extends Form {
  state = {
    data: {
      ticker: '',
      amount: 0,
    },
    errors: {},
  }

  schema = {
    amount: Joi.number().min(0.000001).label('Amount Purchased'),
    ticker: Joi.string().label('Ticker Symbol'),
  }

  doSubmit = async () => {
    const { ticker, amount } = this.state.data
    const { id } = this.props
    const cryptoName = ticker.toUpperCase()
    try {
      await mongoDbService.addToPortfolio(cryptoName, amount, id)
      alert(`${cryptoName} successfully added to your portfolio.`)
      window.location.reload()
    } catch (err) {
      alert(err)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('ticker', 'Ticker Symbol')}
          {this.renderInput('amount', 'Amount Purchased')}
          {this.renderButton('Add to Portfolio')}
        </form>
      </div>
    )
  }
}

export default AddToPortfolioForm
