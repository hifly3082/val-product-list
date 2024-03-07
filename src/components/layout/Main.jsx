import { Outlet } from 'react-router-dom'
import styles from './main.module.scss'

const Main = () => {
  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  )
}

export default Main
