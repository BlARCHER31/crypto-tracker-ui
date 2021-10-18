import React, { useState, useEffect } from 'react'
import coinbase from '../services/coinBaseService'
import AddButton from './common/addButton'

const CryptoMarket = ({ user }) => {
  const crypto = [
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

  const [market, setMarket] = useState([])

  const getPrice = async ticker => {
    const table = await coinbase.getCryptoPrice(ticker)
    return table.data
  }

  useEffect(() => {
    let active = true
    const fetchMarketData = () => {
      let cryptoInfo = []

      if (active) {
        crypto.forEach(async crypto => {
          for (const key in crypto) {
            const cryptoData = await getPrice(crypto[key])
            cryptoInfo.push(cryptoData)
          }
        })
      }
      setMarket(cryptoInfo)
    }
    fetchMarketData()
    // return () => {
    //   active = false
    // }
  }, [])

  return (
    <div>
      <h1>Current Crypto Prices{console.log(market)}</h1>
      {market && (
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
              {market.map(crypto => (
                <tr key={crypto.base}>
                  <th>{crypto.base}</th>
                  <td>{crypto.amount}</td>
                  <td>{crypto.currency}</td>
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

export default CryptoMarket
