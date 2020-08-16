/* eslint-disable no-unused-vars */
import cookieService from './cookieService'
import locaStorageService from './localStorage'
export function tokenHandler(req) {
  let token
  let expirationDate
  if (req) {
    if (!req.headers.cookie) return false

    const cookies = req.headers.cookie.split(';')
    token = cookieService.getToken(cookies, 'jwt')
    expirationDate = cookieService.getTokenExpiration(cookies, 'expirationDate')
  } else {
    token = locaStorageService.getToken()
    expirationDate = locaStorageService.getTokenExpiration()
  }

  return {
    token,
    expirationDate,
  }
}
