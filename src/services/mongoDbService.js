import axios from 'axios'

async function addToPortfolio(cryptoName, buyPrice, amount, _id) {
  const token = localStorage.getItem('token')
  try {
    await axios.put(
      `http://localhost:5000/api/portfolio`,
      { cryptoName, buyPrice, amount, _id },
      {
        headers: {
          'x-auth-token': token,
        },
      }
    )
  } catch (error) {
    console.log(error.message)
  }
}

async function getPortfolio(_id) {
  const token = localStorage.getItem('token')

  try {
    let response = await axios.get(
      `http://localhost:5000/api/portfolio/${_id}`,
      {
        headers: {
          'x-auth-token': token,
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export default {
  addToPortfolio,
  getPortfolio,
}
