import React from 'react'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = () => (
  <Breadcrumb
    items={[
      {
        title: <NavLink to='/home'>Главная</NavLink>
      },
      {
        title: <p>Каталог</p>
      }
    ]}
  />
)
export default Breadcrumbs
