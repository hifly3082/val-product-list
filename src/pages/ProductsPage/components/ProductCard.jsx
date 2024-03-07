import numeral from 'numeral'
import styles from './productcard.module.scss'
import { HeartOutlined } from '@ant-design/icons'

const PRICE_FORMAT = '0,00.00'
const DEFAULT_PLACEHOLDER_IMAGE = 'https://placehold.co/300/FFFFFF/DDD'

const ProductCard = ({ product }) => {
  const formattedPrice = numeral(product.price).format(PRICE_FORMAT)

  return (
    <div className={styles.card}>
      <img
        alt='placeholder'
        src={DEFAULT_PLACEHOLDER_IMAGE}
        className={styles.image}
      />
      <div className={styles.info}>
        <p>ID: {product.id}</p>
        {product.brand === null ? (
          <p>Бренд: Valantis</p>
        ) : (
          <p>Бренд: {product.brand}</p>
        )}
      </div>
      <p className={styles.title}>{product.product}</p>
      <p className={styles.price}>{formattedPrice} &#8381;</p>
      <button className={styles.btn_favorites}>
        <HeartOutlined />
      </button>
    </div>
  )
}
export default ProductCard
