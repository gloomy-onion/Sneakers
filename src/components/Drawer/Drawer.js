import React, { useContext, useState } from 'react'
import styles from './Drawer.module.scss'
import CartItem from './CartItems/CartItem'
import CartBottom from './CartBottom/CartBottom'
import Info from '../Info/Info'
import emptyCart from './../../img/emptyCart.png'
import orderCompleted from './../../img/orderCompleted.svg'
import AppContext from '../common/context'

const Drawer = (props) => {
  const { setCartItems } = useContext(AppContext)
  const [isOrderCompleted, setIsOrderCompleted] = useState(false)
  const onClickOrder = () => {
    setIsOrderCompleted(true)
    setCartItems([])
  }

  const { onClose, items, onRemove } = props
  return (
    <div className={styles.drawer}>
      <div className={styles.cartTop}>
        <h2 className={styles.drawerCartName}>
          Корзина
          <button className={styles.closeButton} onClick={onClose} />
        </h2>
        {!items.length ? (
          <Info
            title={isOrderCompleted ? 'Заказ оформлен' : 'Ваша корзина пуста'}
            description={
              isOrderCompleted
                ? 'Ваш заказ скоро будет передан в доставку'
                : 'Добавьте кроссовки в корзину, чтобы сделать заказ'
            }
            image={isOrderCompleted ? orderCompleted : emptyCart}
          />
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
            <CartBottom onClick={onClickOrder} />
          </>
        )}
      </div>
    </div>
  )
}

export default Drawer
