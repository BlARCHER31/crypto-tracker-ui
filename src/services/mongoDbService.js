import axios from 'axios'

async function addToPortfolio(cryptoName, amount, _id) {
  const token = localStorage.getItem('token')
  try {
    await axios.put(
      `https://archer-crypto.glitch.me/api/portfolio`,
      { cryptoName, amount, _id },
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
      `https://archer-crypto.glitch.me/api/portfolio/${_id}`,
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

async function deletePortfolioItem(user, _id) {
  const token = localStorage.getItem('token')
  try {
    await axios.delete(`https://archer-crypto.glitch.me/api/portfolio/${user}/${_id}`, {
      headers: {
        'x-auth-token': token,
      },
    })
  } catch (error) {
    console.log(error.message)
  }
}

async function decreasePortfolioAmount(amount, cryptoId, username) {
  const token = localStorage.getItem('token')
  try {
    await axios.put(
      `https://archer-crypto.glitch.me/api/portfolio/update-amount`,
      { amount, cryptoId, username },
      {
        headers: {
          'x-auth-token': token,
        },
      }
    )
  } catch (error) {
    return error.message
  }
}

export default {
  addToPortfolio,
  getPortfolio,
  deletePortfolioItem,
  decreasePortfolioAmount,
}
