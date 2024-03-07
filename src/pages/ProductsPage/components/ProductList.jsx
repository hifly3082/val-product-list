import ProductCard from './ProductCard'
import Spinner from '../../../components/Spinner'
import styles from './productlist.module.scss'

const ProductList = ({ products, loading }) => {
  return (
    <div className={styles.list}>
      {loading && <Spinner />}
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
export default ProductList
