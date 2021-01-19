import Axios from "axios"

const baseURL = "https://api.spacexdata.com/v4"
const axios = Axios.create({ baseURL })

export const api = {
  getAllLaunches: async () => axios.get(`/launches`),
  getLaunches: async (options) => axios.post(`/launches/query`, options),
  getRockets: async () => axios.get("/rockets"),
  getLaunchpads: async () => axios.get("/launchpads"),
}
