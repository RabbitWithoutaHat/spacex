import { Dispatch, AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import {
  ILaunch,
  ILaunchpad,
  IRocket,
  IFiltersState,
  IParamsState,
  IApi,
} from "../types/types"
import {
  SET_LAUNCHES,
  SET_ROCKETS,
  SET_LAUNCHPADS,
  SET_PAGINATION,
  SET_TOTAL_DOCS,
  SET_ROCKET_FILTER,
  SET_LAUNCHPAD_FILTER,
} from "./types"

const setLaunches = (data: ILaunch) => {
  return { type: SET_LAUNCHES, data }
}

const setRockets = (data: IRocket) => {
  return { type: SET_ROCKETS, data }
}
const setLaunchpads = (data: ILaunchpad) => {
  return { type: SET_LAUNCHPADS, data }
}

const setPagination = (data: number) => {
  return { type: SET_PAGINATION, data }
}

const setTotalDocs = (data: number) => {
  return { type: SET_TOTAL_DOCS, data }
}
const setRocketFilter = (data: string) => {
  return { type: SET_ROCKET_FILTER, data }
}
const setLaunchpadFilter = (data: string) => {
  return { type: SET_LAUNCHPAD_FILTER, data }
}

const getLaunches = async (
  dispatch: Dispatch,
  getState: () => IParamsState,
  { api }: IApi
) => {
  try {
    const { data } = await api.getLaunches(getState().params.params)
    dispatch(setLaunches(data.docs))
    dispatch(setTotalDocs(data.totalDocs))
  } catch (error) {
    if (!error.response) throw error
  }
}

const getRockets = async (
  dispatch: Dispatch,
  getState: () => IFiltersState,
  { api }: IApi
) => {
  try {
    const { data } = await api.getRockets()
    dispatch(setRockets(data))
  } catch (error) {
    if (!error.response) throw error
  }
}

const getLaunchpads = async (
  dispatch: Dispatch,
  getState: () => IFiltersState,
  { api }: IApi
) => {
  try {
    const { data } = await api.getLaunchpads()
    dispatch(setLaunchpads(data))
  } catch (error) {
    if (!error.response) throw error
  }
}

const changePagination = (page: number) => (
  dispatch: ThunkDispatch<IParamsState, IApi, AnyAction>
) => {
  dispatch(setPagination(page))
  try {
    dispatch(getLaunches as any)
  } catch (error) {
    if (!error.response) throw error
  }
}

const changeLaunchpadFilter = (launchpad: string) => (
  dispatch: ThunkDispatch<IParamsState, IApi, AnyAction>
) => {
  try {
    dispatch(setLaunchpadFilter(launchpad))
    dispatch(getLaunches)
  } catch (error) {
    if (!error.response) throw error
  }
}

const changeRocketFilter = (rocket: string) => (
  dispatch: ThunkDispatch<IParamsState, IApi, AnyAction>
) => {
  try {
    dispatch(setRocketFilter(rocket))
    dispatch(getLaunches)
  } catch (error) {
    if (!error.response) throw error
  }
}

export {
  getLaunches,
  getRockets,
  getLaunchpads,
  changePagination,
  changeLaunchpadFilter,
  changeRocketFilter,
}
