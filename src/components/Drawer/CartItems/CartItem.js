import React from 'react'
import styles from '../CartItems/CartItem.module.scss'

const CartItem = (props) => {
  const { image, name, price, onRemove, id } = props

  return (
    <div className={styles.cartItem} id={id}>
      <img alt={''} src={image} className={styles.cartItemImg} />
      <div className={styles.cartItemDescription}>
        <p className={styles.cartItemName}>{name}</p>
        <b>{price}</b>
      </div>
      <button className={styles.closeButton} onClick={onRemove} />
    </div>
  )
}

export default CartItem
