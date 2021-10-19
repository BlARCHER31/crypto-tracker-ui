import React from 'react'
import coinbase from '../services/coinBaseService'
import Joi from 'joi-browser'
import Form from './common/form'
import uphold from '../services/upholdService'
import AddButton from './common/addButton'

class CryptoPrices extends Form {
  state = {
    data: {
      ticker: '',
    },
    cryptoData: '',
    errors: {},
  }

  doSubmit = async () => {
    const { data } = this.state
    try {
      let response = await coinbase.getCryptoPrice(data.ticker)
      let cryptoData = response.data
      if (!cryptoData) {
        response = await uphold.getUpholdPrice(data.ticker)
        cryptoData = response.data
      }
      console.log(cryptoData)
      this.setState({ cryptoData })
      console.log(this.state)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.email = error.response.data.message
        this.setState({ errors })
      }
    }
  }

  schema = {
    ticker: Joi.string().required().label('Ticker Symbol'),
  }

  render() {
    const { user } = this.props
    return (
      <React.Fragment>
        <h1>Get Current Crypto Prices</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('ticker', 'Ticker Symbol')}
          {this.renderButton('Search')}
        </form>
      </React.Fragment>
    )
  }
}
export default CryptoPrices
