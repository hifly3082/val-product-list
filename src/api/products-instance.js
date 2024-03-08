import axios from 'axios'
import {
  getHeaders,
  handleCommonRequest,
  handleCommonResponse
} from './common-handler'

export const BASE_URL = 'https://api.valantis.store:41000/'

let instance = axios.create({
  baseURL: BASE_URL,
  headers: getHeaders()
})

handleCommonRequest(instance)
handleCommonResponse(instance)

export const productsPost = (action, payload) => {
  return instance.post('', {
    action,
    ...payload
  })
}
