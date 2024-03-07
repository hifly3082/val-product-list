import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Input, Select, Button } from 'antd'
import styles from './filters.module.scss'

const { Search } = Input

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [brand, setBrand] = useState(searchParams.get('brand') || '')
  const [product, setProduct] = useState(searchParams.get('product') || '')
  const [price, setPrice] = useState(searchParams.get('price') || '')

  const { brands } = useSelector((state) => state.products)

  const handleSelectChange = (brand) => {
    setSearchParams({ ...(brand && { brand }) })
    setBrand(brand || '')
    setPrice('')
    setProduct('')
  }

  const handleSearch = (paramName) => (value) => {
    setSearchParams({ [paramName]: value })
  }

  const handleChange = (paramName) => (e) => {
    if (paramName === 'product') {
      setProduct(e.target.value)
      setPrice('')
      setBrand('')
    } else {
      setPrice(e.target.value)
      setProduct('')
      setBrand('')
    }
  }

  const handleResetFilters = () => {
    setSearchParams({})
  }

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <div className={styles.filters}>
      <Select
        showSearch
        allowClear
        optionFilterProp='children'
        onChange={handleSelectChange}
        filterOption={filterOption}
        value={brand === '' ? 'Выберите бренд' : brand}
        style={{
          width: 240
        }}
        options={brands}
      />
      <Search
        placeholder='Введите наименование товара'
        onSearch={handleSearch('product')}
        onChange={handleChange('product')}
        value={product}
        style={{
          width: 300
        }}
      />
      <Search
        placeholder='Введите цену'
        onSearch={handleSearch('price')}
        onChange={handleChange('price')}
        value={price}
        style={{
          width: 200
        }}
      />
      <Button type='text' onClick={handleResetFilters}>
        Сбросить фильтры
      </Button>
    </div>
  )
}

export default Filters
