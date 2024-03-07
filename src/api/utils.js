import md5 from 'md5'

const MAX_RETRIES = 2
const RETRY_DELAY = 0
const DEFAULT_PWD = 'Valantis'

export const retryFetchData = async (fetchDataFunction, ...args) => {
  let retries = 0
  while (retries < MAX_RETRIES) {
    try {
      const data = await fetchDataFunction(...args)
      return data
    } catch (error) {
      console.error(`Error fetching data (attempt ${retries + 1}):`, error)
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
      retries++
    }
  }
  throw new Error(`Data fetch failed after ${MAX_RETRIES} retries.`)
}

export const getCurrentDateWithoutDashes = () => {
  const currentDate = new Date()
  const formattedDate = currentDate
    .toISOString()
    .split('T')[0]
    .replace(/-/g, '')
  return formattedDate
}

export const getAuthKey = () => {
  const pwd = DEFAULT_PWD + '_' + getCurrentDateWithoutDashes()
  return md5(pwd)
}
