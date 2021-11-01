import axios from 'axios'

async function addToPortfolio(name, buyPrice, amount, _id) {
  const token = localStorage.getItem('token')
  try {
    await axios.put(
      `http://localhost:5000/api/portfolio`,
      { name, buyPrice, amount, _id },
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

export default {
  addToPortfolio,
}
