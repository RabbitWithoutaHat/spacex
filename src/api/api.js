import Axios from "axios"
import { loadProgressBar } from "axios-progress-bar"
import "axios-progress-bar/dist/nprogress.css"

const CancelToken = Axios.CancelToken
let cancel

const baseURL = "https://api.spacexdata.com/v4"
const axios = Axios.create({ baseURL })

loadProgressBar("", axios)

export const api = {
  getLaunches: async (options) => {
    cancel && cancel()
    return axios.post(`/launches/query`, options, {
      cancelToken: new CancelToken(function executor(c) {
        cancel = c
      }),
    })
  },
  getRockets: async () => {
    return axios.get("/rockets")
  },
  getLaunchpads: async () => axios.get("/launchpads"),
}
