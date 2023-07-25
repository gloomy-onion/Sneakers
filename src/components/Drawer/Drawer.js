import React from 'react';
import sneakers1 from '../../img/sneakers1.jpg';
import sneakers2 from '../../img/sneakers2.jpg';
import orderCart from '../../img/orderCart.svg';
import styles from './Drawer.module.scss';

const Drawer = () => {

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.cartTop}>
                    <h2 className={styles.drawerCartName}> Корзина
                        <button className={styles.closeButton}>
                        </button>
                    </h2>
                    <div className={styles.cartItems}>
                        <div className={styles.cartItem}>
                            <img alt={''} src={sneakers1} className={styles.cartItemImg}/>
                            <div className={styles.cartItemDescription}><p className={styles.cartItemName}>
                                Мужские кроссовки Nike Blazer
                            </p>
                                <b> 5 руб.</b>
                            </div>
                            <button className={styles.closeButton}></button>
                        </div>
                        <div className={styles.cartItem}>
                            <img alt={''} src={sneakers2} className={styles.cartItemImg}/>
                            <div className={styles.cartItemDescription}><p className={styles.cartItemName}>
                                Мужские кроссовки Nike Blazer
                            </p>
                                <b> 5 руб.</b>
                            </div>
                            < button className={styles.closeButton}/>
                        </div>
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
                    <button className={styles.orderButton}><img alt={''} src={orderCart}/></button>
                </div>
            </div>
        </div>);
};

export default Drawer;