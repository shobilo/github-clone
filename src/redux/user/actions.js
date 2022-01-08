import * as constants from './constants'

export const setAuth = (setAuthBool) => {
  return {
    type: constants.SET_AUTH,
    payload: setAuthBool
  }
}