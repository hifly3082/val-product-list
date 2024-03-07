import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined
} from '@ant-design/icons'
import Logo from './Logo'
import styles from './header.module.scss'
import classNames from 'classnames'

const Header = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 0) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={classNames(styles.header, active && styles.active)}>
      <div className={styles.header_top}>
        <p className={styles.phone}>+7 (985) 134 92 94</p>
        <p className={styles.online}>сейчас онлайн</p>
        <p>
          <NavLink to='home'>
            <Logo />
          </NavLink>
        </p>
        <p className={styles.icon}>
          <SearchOutlined />
        </p>
        <p className={styles.icon}>
          <HeartOutlined />
        </p>
        <p className={styles.icon}>
          <UserOutlined />
        </p>
        <p className={styles.icon}>
          <ShoppingOutlined />
        </p>
      </div>
      <div className={styles.header_bot}>
        <nav className={styles.nav}>
          <NavLink to='/catalog'>Каталог</NavLink>
          <Link to='#'>Изготовление</Link>
          <Link to='#'>Ремонт</Link>
          <Link to='#'>Как заказать</Link>
          <Link to='#'>О нас</Link>
          <Link to='#'>Контакты</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
