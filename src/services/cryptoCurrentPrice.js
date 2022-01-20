import axios from 'axios'

async function getCryptoPrice(cryptoTicker) {
  let cryptoData
  try {
    cryptoData = await axios.get(
      `https://archer-crypto.glitch.me/api/crypto-price/${cryptoTicker}`
    )
    return cryptoData.data.amount || cryptoData.data.bid
  } catch (error) {
    alert(`Sorry, no results for ${cryptoTicker}.`)
  }
}

export default {
  getCryptoPrice,
}
