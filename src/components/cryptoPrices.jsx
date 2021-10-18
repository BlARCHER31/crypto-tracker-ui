import React from 'react'
import coinbase from '../services/coinBaseService'
import Joi from 'joi-browser'
import Form from './common/form'
import AddButton from './common/addButton'

class CryptoPrices extends Form {
  state = {
    errors: {},
  }

  componentDidMount() {
    let cryptoInfo = []
    this.crypto.forEach(async crypto => {
      for (const key in crypto) {
        const cryptoData = await this.getPrice(crypto[key])
        cryptoInfo.push(cryptoData)
      }
    })
    this.setState({ crypto: cryptoInfo })
  }

  schema = { crypto: Joi.string().required().label('Crypto') }

  crypto = [
    { Bitcoin: 'BTC' },
    { Ethereum: 'ETH' },
    { Tether: 'USDT' },
    { Cardano: 'ADA' },
    { Uniswap: 'UNI' },
    { 'Shiba Inu': 'SHIB' },
    { Solana: 'SOL' },
    { 'USD Coin': 'USDC' },
    { Polkadot: 'DOT' },
    { Dogecoin: 'DOGE' },
  ]

  getPrice = async tickerSymbol => {
    const cryptoInfo = await coinbase.getCryptoPrice(tickerSymbol)

    return cryptoInfo.data
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <h1>Current Crypto Prices</h1>
        {this.state.crypto && (
          <div>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Ticker</th>
                  <th scope='col'>Current Price</th>
                  <th scope='col'>Currency</th>
                </tr>
              </thead>
              <tbody>
                {this.state.crypto.map(crypto => (
                  <tr key={crypto['base']}>
                    <th>{crypto['base']}</th>
                    <td>{`$${crypto['amount']}`}</td>
                    <td>{crypto['currency']}</td>
                    {user && (
                      <td>
                        <AddButton />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}
export default CryptoPrices
