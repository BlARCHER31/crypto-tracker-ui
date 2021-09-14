import axios from 'axios'

export async function register() {
  try {
    const result = await axios.post(
      'http://localhost:5000/api/users/register',
      {
        name: 'cxvxcxcxvcxvx',
        username: 'xcvxvcxvxcvxcv',
        email: 'xccvddsf@df.com',
        password: 'password',
      }
    )
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
