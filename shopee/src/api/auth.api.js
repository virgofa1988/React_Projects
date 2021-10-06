import http from '../utils/http'

const authAPI = {
  register(data) {
    return http.post('register', data)
  },
  login(data) {
    return http.post('login', data)
  }
}

export default authAPI
