import * as constants from './constants';

const defaultState = {
  isAuth: false,
  isUserLoading: true
}

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    case constants.SET_IS_USER_LOADING:
      return {
        ...state,
        isUserLoading: action.payload
      }
    default: 
      return state
  }
}

export default userReducer
