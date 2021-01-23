import { SET_LAUNCHES } from "../types"

const initialState = {
  launches: undefined,
}

export default function (state = initialState, action: any) {
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
