import axios from 'axios'

export function register(user) {
  try {
    return axios.post(
      'https://archer-crypto.glitch.me/api/users/register',
      user
    )
  } catch (error) {
    return error
  }
}
