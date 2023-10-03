import React from 'react'
import styles from './CartBottom.module.scss'
import { useCart } from '../../common/useCart'

const CartBottom = (props) => {
  const { totalPrice } = useCart()

  const { onClick } = props
  return (
    <div className={styles.cartBottom}>
      <div className={styles.cartBottomText}>
        <p>Итого:</p>
        <b>{totalPrice} руб.</b>
      </div>
      <div className={styles.cartBottomText}>
        <p>Налог:</p>
        <b>{(totalPrice / 100) * 5} руб.</b>
      </div>
      <button onClick={onClick} className={styles.greenCartButton}>
        Оформить заказ
      </button>
    </div>
  )
}
export default CartBottom
