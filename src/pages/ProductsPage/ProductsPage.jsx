import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination } from 'antd'

import {
  getPaginationInfo,
  setPage,
  fetchProductsWithPagination,
  fetchBrands,
  fetchProductsWithFilter
} from '../../features/products/productsSlice'

import Breadcrumbs from './components/Breadcrumbs'
import Filters from './components/Filters'
import ProductList from './components/ProductList'
import styles from './productspage.module.scss'

const ProductsPage = () => {
  const [searchParams] = useSearchParams()
  const brand = searchParams.get('brand') || ''
  const product = searchParams.get('product') || ''
  const price = searchParams.get('price') || null
  const dispatch = useDispatch()
  const { products, brandsLoading, productsLoading, paginationInfo } =
    useSelector((state) => state.products)

  const isFiltersReset = brand === '' && product === '' && price === null
  const normalizedBrand = brand === 'null' ? null : brand

  useEffect(() => {
    dispatch(getPaginationInfo())
    dispatch(fetchBrands())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (productsLoading !== 'loading') {
      if (brand || product || price) {
        dispatch(
          fetchProductsWithFilter({
            ...(brand && { brand: normalizedBrand }),
            ...(product && { product }),
            ...(price && { price: Number(price) })
          })
        )
      } else {
        dispatch(
          fetchProductsWithPagination({
            limit: paginationInfo.pageSize,
            offset: (paginationInfo.currentPage - 1) * paginationInfo.pageSize
          })
        )
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, product, price, paginationInfo])

  const handlePaginationChange = (page, pageSize) => {
    dispatch(setPage(page))
  }

  return (
    <section className={styles.product_page}>
      <Breadcrumbs />
      <h1 className={styles.header}>Каталог ювелирных украшений</h1>
      <Filters />

      {!isFiltersReset && productsLoading !== 'loading' && (
        <p className={styles.found_products}>
          Найдено товаров: {products?.length}
        </p>
      )}

      <ProductList
        products={products}
        loading={productsLoading === 'loading' || brandsLoading === 'loading'}
      />
      <div className={styles.pagination}>
        {isFiltersReset && (
          <Pagination
            responsive
            total={paginationInfo.totalItems}
            defaultPageSize={paginationInfo.pageSize}
            defaultCurrent={paginationInfo.currentPage}
            onChange={handlePaginationChange}
            showSizeChanger={false}
            disabled={
              productsLoading === 'loading' || brandsLoading === 'loading'
            }
          />
        )}
      </div>
    </section>
  )
}
export default ProductsPage
