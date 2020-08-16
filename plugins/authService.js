const loginURL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
  process.env.apiKey

const registrURL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
  process.env.apiKey

export default (ctx, inject) => {
  const login = (body) => {
    return ctx.$axios.post(loginURL, body)
  }
  const registr = (body) => {
    return ctx.$axios.post(registrURL, body)
  }

  inject('authService', {
    login,
    registr,
  })
}
