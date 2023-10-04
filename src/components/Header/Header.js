import React, { useContext } from 'react'
import logo from '../../img/logo.svg'
import cart from '../../img/cart.svg'
import profile from '../../img/profile.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import AppContext from '../common/context'
import { useCart } from '../common/useCart'

const Header = () => {
  const { setCartOpened } = useContext(AppContext)
  const { totalPrice } = useCart()

  //мне кажется что корзина должна прогружаться при открытии приложения чтобы было видно сумму в корзине
  //я ебала свою тупость и я наверное час не могла понять почему оно не считает нормально
  //оказалось что цена написана строкой))))))))))))))))))))))
  return (
    <header className={styles.headerAll}>
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
        <li className={styles.cartImg} onClick={() => setCartOpened(true)}>
          <img alt={''} src={cart} />
          <span className={styles.cartMoney}>{totalPrice} руб.</span>
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
