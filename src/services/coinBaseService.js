import axios from 'axios'

function getCryptoPrice(crytoTicker) {
  let cryptoData
  try {
    cryptoData = axios.get(`http://localhost:5000/api/coinbase/${crytoTicker}`)
    return cryptoData
  } catch (error) {}
}

export default {
  getCryptoPrice,
}
