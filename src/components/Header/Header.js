import React from 'react'
import logo from '../../img/logo.svg'
import cart from '../../img/cart.svg'
import profile from '../../img/profile.svg'
import styles from './Header.module.scss'

const Header = (props) => {
  const { onClickCart } = props
  return (
    <header className={styles.headerAll}>
      <div className={styles.headerLeft}>
        <img alt={''} src={logo} />
        <div className={styles.headerInfo}>
          <h3 className={styles.reactSneakers}>React Sneakers</h3>
          <p className={styles.sneakerShop}>Магазин кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li className={styles.cartImg} onClick={onClickCart}>
          <img alt={''} src={cart} />
          <span className={styles.cartMoney}>2673 руб.</span>
        </li>
        <li className={''}>
          <img alt={''} src={profile} />
        </li>
      </ul>
    </header>
  )
}

export default Header
