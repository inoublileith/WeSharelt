import http from '../http-common'
const register = (login, email, password) => {
  return http.post('/auth/signup', {
    login,
    email,
    password,
  })
}
const login = (login, password) => {
  return http
    .post('/auth/signin', {
      login,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}
const logout = () => {
  localStorage.removeItem('user')
}
export default {
  register,
  login,
  logout,
}
