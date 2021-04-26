import { AnyAction } from 'redux';
import { SET_LAUNCHPADS, SET_ROCKETS } from "../types"

const initialState = {
  rockets: undefined,
  launchpads: undefined,
}

export default function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_ROCKETS: {
      return {
        ...state,
        rockets: action.data,
      }
    }
    case SET_LAUNCHPADS: {
      return {
        ...state,
        launchpads: action.data,
      }
    }

    default:
      return state
  }
}
