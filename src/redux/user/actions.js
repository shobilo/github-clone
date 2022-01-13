import * as actionType from './actionTypes'

export const setAuth = (setAuthBool) => {
  return {
    type: actionType.SET_AUTH,
    payload: setAuthBool
  }
}

export const setIsUserLoading = (setIsUserLoadingBool) => {
  return {
    type: actionType.SET_IS_USER_LOADING,
    payload: setIsUserLoadingBool
  }
}