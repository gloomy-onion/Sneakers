import styles from '../EmptyCart/EmptyCard.module.scss'
import emptyCart from '../../../img/emptyCart.png'
import React from 'react'

const EmptyCart = (props) => {
  const { onClose } = props
  return (
      <>
        <div className={styles.emptyCart}>
          <img alt={''} src={emptyCart} className={styles.emptyCartImg} />
          <h3>Ваша корзина пустая </h3>
          <button className={styles.greenCartButton} onClick={onClose}>
            Вернуться назад
          </button>
        </div>
      </>
  )
}

export default EmptyCart
