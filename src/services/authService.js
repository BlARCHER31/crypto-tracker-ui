import axios from 'axios'
import jwtDecode from 'jwt-decode'

const tokenKey = 'token'

export async function login(email, password) {
  const { data: jwt } = await axios.post('http://localhost:5000/api/auth/', {
    email,
    password,
  })
  localStorage.setItem(tokenKey, jwt)
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt)
}

export function logout() {
  localStorage.removeItem(tokenKey)
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey)
    return jwtDecode(jwt)
  } catch (error) {
   return null
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
}