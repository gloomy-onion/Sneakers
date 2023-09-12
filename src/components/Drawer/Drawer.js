import React from 'react';
import styles from './Drawer.module.scss';
import CartItem from './CartItems/CartItem';
import CartBottom from './CartBottom/CartBottom';
import Info from '../Info/Info';
import emptyCart from './../../img/emptyCart.png';

const Drawer = (props) => {
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false)
    const onClickOrder = () => {
        setIsOrderCompleted(true)
    }

    const {onClose, items, onRemove} = props;
    return (
        <div className={styles.drawer}>
            <div className={styles.cartTop}>
                <h2 className={styles.drawerCartName}>
                    Корзина
                    <button className={styles.closeButton} onClick={onClose}/>
                </h2>
                {!items.length ? (
                    <Info title={'Ваша корзина пуста'} description={'Добавьте кроссовки в корзину, чтобы сделать заказ'}
                          image={emptyCart}/>
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
                                );
                            })}
                        </div>
                        <CartBottom/>
                    </>
                )}
            </div>
        </div>
    );
};

export default Drawer;
