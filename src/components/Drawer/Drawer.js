import React from 'react'
import styles from './Drawer.module.scss'
import CartItem from './CartItems/CartItem'
import EmptyCart from './EmptyCart/EmptyCart'
import CartBottom from './CartBottom/CartBottom'

const Drawer = (props) => {
  const { onClose, items, onRemove } = props
  return (
    <div className={styles.drawer}>
      <div className={styles.cartTop}>
        <h2 className={styles.drawerCartName}>
          Корзина
          <button className={styles.closeButton} onClick={onClose} />
        </h2>
        {!items.length ? (
          <EmptyCart onClose={onClose} />
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
            <CartBottom />
          </>
        )}
      </div>
    </div>
  )
}

export default Drawer
