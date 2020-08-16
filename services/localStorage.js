const JWT_TOKEN = 'token'
const LOG_OUT_TIMER = 'tokenExpiration'
export default {
  saveToken(token) {
    localStorage.removeItem(JWT_TOKEN)
    localStorage.setItem(JWT_TOKEN, token)
  },

  getToken() {
    return localStorage.getItem(JWT_TOKEN)
  },

  saveTokenExpiration(time) {
    localStorage.removeItem(LOG_OUT_TIMER)
    localStorage.setItem(LOG_OUT_TIMER, time)
  },

  getTokenExpiration() {
    return localStorage.getItem(LOG_OUT_TIMER)
  },
  clearToken() {
    localStorage.removeItem(JWT_TOKEN)
    localStorage.removeItem(LOG_OUT_TIMER)
  },
}
