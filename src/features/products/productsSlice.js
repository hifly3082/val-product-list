import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit'
import { getIds, getItems, getBrands, getFilteredItems } from '../../api/api'
import { filterUniqueById } from '../../utils/helpers'

// getting all ids for pagination because API doesn't provide this info
export const getPaginationInfo = createAsyncThunk(
  'products/getPaginationInfo',
  async () => {
    const ids = await getIds()
    return ids
  }
)

// setup current page for pagination
export const setPage = createAction('setPage')

export const fetchProductsWithPagination = createAsyncThunk(
  'products/fetchProductsWithPagination',
  async ({ limit, offset }) => {
    const ids = await getIds(limit, offset)
    const products = await getItems(ids)
    const uniqueProducts = filterUniqueById(products)
    return uniqueProducts
  }
)

// receive all brands for filter
export const fetchBrands = createAsyncThunk(
  'products/fetchBrands',
  async () => {
    const brands = await getBrands()
    return brands
  }
)

export const fetchProductsWithFilter = createAsyncThunk(
  'products/fetchProductsWithFilter',
  async (params) => {
    const ids = await getFilteredItems(params)
    const filteredProducts = await getItems(ids)
    const uniqueProducts = filterUniqueById(filteredProducts)
    return uniqueProducts
  }
)

const DEFAULT_PAGE_SIZE = 50
const DEFAULT_PAGE_NUMBER = 1
const DEFAULT_PAGES_NUMBER = 1
const DEFAULT_TOTAL_ITEMS = 0

const initialState = {
  paginationInfo: {
    pageSize: DEFAULT_PAGE_SIZE,
    currentPage: DEFAULT_PAGE_NUMBER,
    totalPages: DEFAULT_PAGES_NUMBER,
    totalItems: DEFAULT_TOTAL_ITEMS
  },
  paginationLoading: 'idle',
  products: [],
  productsLoading: 'idle',
  brands: [],
  brandsLoading: 'idle'
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      // PAGINATION INFO
      .addCase(getPaginationInfo.pending, (state) => {
        state.paginationLoading = 'loading'
      })
      .addCase(getPaginationInfo.fulfilled, (state, action) => {
        state.paginationLoading = 'idle'
        state.paginationInfo.totalItems = action.payload?.length
        state.paginationInfo.totalPages = Math.ceil(
          state.paginationInfo.totalItems / state.paginationInfo.pageSize
        )
      })
      .addCase(getPaginationInfo.rejected, (state) => {
        state.paginationLoading = 'error'
      })
      .addCase(setPage, (state, action) => {
        state.paginationInfo.currentPage = action.payload
      })

      // FETCH PRODUCTS WITH PAGINATION
      .addCase(fetchProductsWithPagination.pending, (state) => {
        state.productsLoading = 'loading'
      })
      .addCase(fetchProductsWithPagination.fulfilled, (state, action) => {
        state.productsLoading = 'idle'
        state.products = action.payload
      })
      .addCase(fetchProductsWithPagination.rejected, (state) => {
        state.productsLoading = 'error'
      })

      // FETCH BRANDS
      .addCase(fetchBrands.pending, (state) => {
        state.brandsLoading = 'loading'
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brandsLoading = 'idle'
        state.brands = action.payload
      })
      .addCase(fetchBrands.rejected, (state) => {
        state.brandsLoading = 'error'
      })

      // FILTER PRODUCTS
      .addCase(fetchProductsWithFilter.pending, (state) => {
        state.productsLoading = 'loading'
      })
      .addCase(fetchProductsWithFilter.fulfilled, (state, action) => {
        state.productsLoading = 'idle'
        state.products = action.payload
      })
      .addCase(fetchProductsWithFilter.rejected, (state) => {
        state.productsLoading = 'error'
      })
  }
})

export default productsSlice.reducer
