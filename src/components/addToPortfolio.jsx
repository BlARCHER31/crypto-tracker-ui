import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import mongoDbService from '../services/mongoDbService'

class AddToPortFolioButton extends Form {
  state = {
    data: {
      amount: 0,
    },
    errors: {},
  }

  schema = {
    amount: Joi.number().min(0.000001).label('Amount Purchased'),
  }

  doSubmit = async () => {
    const { name: cryptoName, _id } = this.props
    const { amount } = this.state.data
    try {
      await mongoDbService.addToPortfolio(cryptoName, amount, _id)
      window.location.reload()
      alert(`${cryptoName} successfully added to your portfolio.`)
    } catch (err) {
      alert(err)
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('amount', 'Amount Purchased')}
          {this.renderButton('Add to Portfolio')}
        </form>
      </React.Fragment>
    )
  }
}

export default AddToPortFolioButton
