import { getAuthKey } from './utils'

export const getHeaders = function () {
  const headers = {}
  headers['Content-Type'] = 'application/json'
  return headers
}

export const handleCommonRequest = (instance) => {
  return instance.interceptors.request.use(
    (config) => {
      const accessKey = localStorage.getItem('accessKey')
      if (accessKey) {
        config.headers['X-Auth'] = accessKey
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export const handleCommonResponse = (instance) => {
  return instance.interceptors.response.use(
    (response) => {
      return response
    },
    async function (error) {
      // обновляем ключ при ошибке авторизации
      if (error.response && error.response.status === 401) {
        const accessKey = getAuthKey()
        localStorage.setItem('accessKey', accessKey)
      }
      return Promise.reject({
        ...error,
        status: error?.response?.status,
        message: error?.response?.data?.error?.message
      })
    }
  )
}
