import * as constants from './constants';

const defaultState = {
  isAuth: true
}

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    default: 
      return state
  }
}

export default userReducer
