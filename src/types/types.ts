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

export interface IState {
  data?: ILaunch[]
  rockets?: IRocket[]
  launchpads?: ILaunchpad[]
  totalDocs: number
  params?: IQueryParams
}

export type TFilterOption = { [name: string]: any }

export interface IApi {
  api: {
    getLaunches: (options: any) => Promise<AxiosResponse<any>>
    getRockets: () => Promise<AxiosResponse<any>>
    getLaunchpads: () => Promise<AxiosResponse<any>>
  }
}
