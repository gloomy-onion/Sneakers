import React from 'react'
import orderCart from '../../img/orderCart.svg'
import styles from './Drawer.module.scss'
import CartItem from './CartItems/CartItem'

const Drawer = (props) => {
  const { onClose, items } = props
  console.log(items)
  return (
    <div className={styles.drawer}>
      <div className={styles.cartTop}>
        <h2 className={styles.drawerCartName}>
          Корзина
          <button className={styles.closeButton} onClick={onClose} />
        </h2>
        <div className={styles.cartItems}>
          {items.map((item, index) => {
            return (
              <CartItem
                key={index}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.cartBottom}>
        <div className={styles.cartBottomText}>
          <p>Итого:</p>
          <b>10 руб.</b>
        </div>
        <div className={styles.cartBottomText}>
          <p>Налог:</p>
          <b>1 руб.</b>
        </div>
        <button className={styles.orderButton}>
          <img alt={''} src={orderCart} />
        </button>
      </div>
    </div>
  )
}

export default Drawer
