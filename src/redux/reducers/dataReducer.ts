import { AnyAction } from 'redux';
import { SET_LAUNCHES } from "../types"

const initialState = {
  launches: undefined,
}

export default function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_LAUNCHES: {
      return {
        ...state,
        launches: action.data,
      }
    }

    default:
      return state
  }
}
