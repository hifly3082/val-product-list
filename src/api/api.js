import { retryFetchData } from './utils'
import { productsPost } from './products-instance'

async function getInternalIds(limit, offset) {
  const resp = await productsPost('get_ids', {
    params: {
      ...(limit !== undefined && { limit }),
      ...(offset !== undefined && { offset })
    }
  })
  return resp.data.result
}

export async function getIds(limit, offset) {
  return retryFetchData(getInternalIds, limit, offset)
}

// Получаем список товаров по id
async function getInternalItems(ids) {
  const resp = await productsPost('get_items', {
    params: {
      ...(ids && { ids })
    }
  })
  return resp.data.result
}

export async function getItems(ids) {
  return retryFetchData(getInternalItems, ids)
}

// Получаем список всех брендов
async function getInternalBrands() {
  const resp = await productsPost('get_fields', {
    params: {
      field: 'brand'
    }
  })

  const data = resp.data
  const allBrands = Array.from(new Set(data.result))
  const notEmptyBrands = allBrands.filter((item) => item !== null)
  const formattedData = notEmptyBrands.map((item) => ({
    value: item,
    label: item
  }))
  return formattedData
}

// Получаем список всех брендов
export async function getBrands() {
  return retryFetchData(getInternalBrands)
}

// Фильтруем товары по наименованию
async function getInternalFilteredItems(params) {
  const resp = await productsPost('filter', {
    params
  })
  return resp.data.result
}

// Фильтруем товары по наименованию
export async function getFilteredItems(params) {
  return retryFetchData(getInternalFilteredItems, params)
}
