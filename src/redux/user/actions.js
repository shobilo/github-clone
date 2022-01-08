import * as constants from './constants'

export const setAuth = (setAuthBool) => {
  return {
    type: constants.SET_AUTH,
    payload: setAuthBool
  }
}

export const setIsUserLoading = (setIsUserLoadingBool) => {
  return {
    type: constants.SET_IS_USER_LOADING,
    payload: setIsUserLoadingBool
  }
}