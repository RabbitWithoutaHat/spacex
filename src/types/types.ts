import { AxiosResponse } from "axios"

export interface ILaunch {
  links: {
    patch: {
      small: string
    }
  }
  name: string
  date_utc: Date
  details: string
}

export interface IRocket {
  id: string
  name: string
}

export interface ILaunchpad {
  id: string
  name: string
}

export interface IQueryParams {
  query?: {
    rocket?: string
    launchpad?: string
  }
  options?: {
    page?: number
  }
}

export interface IDataState {
  data: { launches?: ILaunch[] }
}

export interface IFiltersState {
  filter: { rockets?: IRocket[]; launchpads?: ILaunchpad[] }
}

export interface IParamsState {
  params: { totalDocs: number; params?: IQueryParams }
}

export type TFilterOption = { [name: string]: any }

export interface IApi {
  api: {
    getLaunches: (
      options?: IQueryParams
    ) => Promise<AxiosResponse<{ docs: ILaunch[]; totalDocs: number }>>
    getRockets: () => Promise<AxiosResponse<IRocket[]>>
    getLaunchpads: () => Promise<AxiosResponse<ILaunchpad[]>>
  }
}
