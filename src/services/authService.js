import axios from 'axios'

export function login(email, password) {
  return axios.post('http://localhost:5000/api/auth/', {
    email,
    password,
  })
}
