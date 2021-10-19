import axios from 'axios'

async function getUpholdPrice(crytoTicker) {
  let cryptoData
  try {
    cryptoData = await axios.get(
      `http://localhost:5000/api/uphold/${crytoTicker}`
    )
    return cryptoData
  } catch (error) {}
}

export default {
  getUpholdPrice,
}
