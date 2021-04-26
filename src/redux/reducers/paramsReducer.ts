import { AnyAction } from 'redux';
import {
  SET_PAGINATION,
  SET_TOTAL_DOCS,
  SET_ROCKET_FILTER,
  SET_LAUNCHPAD_FILTER,
} from "../types"

const initialState = {
  totalDocs: 0,
  params: { query: {}, optoions: {} },
}

export default function (state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_PAGINATION: {
      return {
        ...state,
        params: { ...state.params, options: { page: action.data } },
      }
    }
    case SET_ROCKET_FILTER: {
      return {
        ...state,
        params: {
          options: { page: 1 },
          query: {
            ...state.params.query,
            rocket: action.data === "" ? undefined : action.data,
          },
        },
      }
    }
    case SET_LAUNCHPAD_FILTER: {
      return {
        ...state,
        params: {
          options: { page: 1 },
          query: {
            ...state.params.query,
            launchpad: action.data === "" ? undefined : action.data,
          },
        },
      }
    }
    case SET_TOTAL_DOCS: {
      return {
        ...state,
        totalDocs: action.data,
      }
    }

    default:
      return state
  }
}
