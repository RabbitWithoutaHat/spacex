import { combineReducers } from "redux"
import data from "./reducers/dataReducer"
import filter from "./reducers/filtersReducer"
import params from "./reducers/paramsReducer"

export const rootReducer = combineReducers({
  data,
  filter,
  params,
})
