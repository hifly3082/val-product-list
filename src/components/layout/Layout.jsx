import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
