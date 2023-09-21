import React from 'react'
import styles from './CartBottom.module.scss'

const CartBottom = (props) => {
  const { onClick } = props
  return (
    <div className={styles.cartBottom}>
      <div className={styles.cartBottomText}>
        <p>Итого:</p>
        <b>10 руб.</b>
      </div>
      <div className={styles.cartBottomText}>
        <p>Налог:</p>
        <b>1 руб.</b>
      </div>
      <button onClick={onClick} className={styles.greenCartButton}>
        Оформить заказ
      </button>
    </div>
  )
}
export default CartBottom
