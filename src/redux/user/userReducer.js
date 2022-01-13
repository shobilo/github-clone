import * as actionType from './actionTypes';

const defaultState = {
  isAuth: false,
  isUserLoading: true
}

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionType.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    case actionType.SET_IS_USER_LOADING:
      return {
        ...state,
        isUserLoading: action.payload
      }
    default: 
      return state
  }
}

export default userReducer
