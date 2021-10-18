import axios from 'axios'

async function getCryptoPrice(crytoTicker) {
  let cryptoData
  try {
    cryptoData = await axios.get(
      `http://localhost:5000/api/coinbase/${crytoTicker}`
    )
    return cryptoData
  } catch (error) {}
}

export default {
  getCryptoPrice,
}
