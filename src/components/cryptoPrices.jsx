import React from 'react'
import coinbase from '../services/coinBaseService'
import Joi from 'joi-browser'
import Form from './common/form'
import uphold from '../services/upholdService'
import AddToPortFolio from './addToPortfolioForm'

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
      const uppercaseTicker = data.ticker.toUpperCase()
      let response = await coinbase.getCryptoPrice(uppercaseTicker)
      let cryptoData = response.data
      if (!cryptoData) {
        response = await uphold.getUpholdPrice(uppercaseTicker)
        cryptoData = response.data
      }
      this.setState({ cryptoData, ticker: uppercaseTicker })
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
    const { cryptoData, data, success } = this.state
    const buyPrice = cryptoData.amount || cryptoData.bid
    return (
      <React.Fragment>
        <h1>Get Current Crypto Prices</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('ticker', 'Ticker Symbol')}
          {this.renderButton('Search')}
        </form>
        {cryptoData ? (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Current Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{data.ticker.toUpperCase()}</th>
                <td>{buyPrice}</td>
                <td>
                  {user && !success ? (
                    <AddToPortFolio
                      _id={user._id}
                      name={data.ticker}
                      buyPrice={buyPrice}
                    />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </React.Fragment>
    )
  }
}
export default CryptoPrices
