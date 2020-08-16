import Cookie from 'js-cookie'

export default {
  setCookie(name, payload) {
    Cookie.set(name, payload)
  },

  getToken(cookies, name) {
    return cookies
      .find((cookie) => cookie.trim().startsWith(name))
      .split('=')[1]
  },
  getTokenExpiration(cookies, name) {
    return cookies
      .find((cookie) => cookie.trim().startsWith(name))
      .split('=')[1]
  },
}
