import React from 'react'
import logo from '../../img/logo.svg'
import cart from '../../img/cart.svg'
import profile from '../../img/profile.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { onClickCart } = props
  return (
    <header className={styles.headerAll}>
      {/*вынести линк в отдельный компонент и сбросить все*/}
      <Link to={'/'} className={styles.linkStyle}>
        <div className={styles.headerLeft}>
          <img alt={''} src={logo} />
          <div className={styles.headerInfo}>
            <h3 className={styles.reactSneakers}>React Sneakers</h3>
            <p className={styles.sneakerShop}>Магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={styles.headerRight}>
        <li className={styles.cartImg} onClick={onClickCart}>
          <img alt={''} src={cart} />
          <span className={styles.cartMoney}>2673 руб.</span>
        </li>
        <Link to={'/favourites'}>
          <li className={styles.favouriteBtnHeader}></li>
        </Link>
        <li className={styles.profileHeader}>
          <img alt={''} src={profile} />
        </li>
      </ul>
    </header>
  )
}

export default Header
