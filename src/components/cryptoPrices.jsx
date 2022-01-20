import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import fetchPrice from '../services/cryptoCurrentPrice'
import AddToPortFolioButton from './addToPortfolio'

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
    const uppercaseTicker = data.ticker.toUpperCase()
    try {
      let response = await fetchPrice.getCryptoPrice(uppercaseTicker)
      let cryptoData = response
      if (!cryptoData) {
        throw new Error(
          `Sorry could not find information for ${uppercaseTicker}.`
        )
      }
      this.setState({ cryptoData, ticker: uppercaseTicker })
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.email = error.response.data.message
        this.setState({ errors })
      }
      alert(error.message)
    }
  }

  schema = {
    ticker: Joi.string().required().label('Ticker Symbol'),
  }

  render() {
    const { user } = this.props
    const { cryptoData, data } = this.state
    return (
      <div className='container'>
        <h1 className='title'>Get Current Crypto Prices</h1>
        <p className='description'>
          If you do not know any Crypto Tickers, try BTC, XRP, or ETH.
        </p>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('ticker', 'Ticker Symbol')}
          {this.renderButton('Search')}
        </form>
        {cryptoData ? (
          <table className='table'>
            <thead className='table-head'>
              <tr>
                <th></th>
                <th>Current Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='table-body'>
              <tr>
                <th>{data.ticker.toUpperCase()}</th>
                <td>{cryptoData}</td>
                <td>
                  {user ? (
                    <AddToPortFolioButton
                      _id={user._id}
                      name={data.ticker.toUpperCase()}
                      buyPrice={cryptoData}
                    />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </div>
    )
  }
}
export default CryptoPrices
