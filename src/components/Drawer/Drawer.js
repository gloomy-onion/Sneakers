import React from 'react'
import styles from './Drawer.module.scss'
import CartItem from './CartItems/CartItem'
import emptyCart from '../../img/emptyCart.png'

const Drawer = (props) => {
  const { onClose, items, onRemove } = props
  return (
    <div className={styles.drawer}>
      <div className={styles.cartTop}>
        <h2 className={styles.drawerCartName}>
          Корзина
          <button className={styles.closeButton} onClick={onClose} />
        </h2>

        {items ? (
          <>
            <div className={styles.emptyCart}>
              <img src={emptyCart} className={styles.emptyCartImg} />
              <h3>Ваша корзина пустая </h3>
              <button className={styles.greenCartButton} onClick={onClose}>
                Вернуться назад
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.cartItems}>
              {items.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    name={item.name}
                    onRemove={() => onRemove(item.id)}
                  />
                )
              })}
            </div>
          </>
          //я донт андерстенд почему у меня показывает только пустую корзину вот зе фак
        )}
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
        <button className={styles.greenCartButton}>Оформить заказ</button>
      </div>
    </div>
  )
}

export default Drawer
