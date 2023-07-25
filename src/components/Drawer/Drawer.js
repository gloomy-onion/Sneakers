import React from 'react';
import sneakers1 from '../../img/sneakers1.jpg';
import sneakers2 from '../../img/sneakers2.jpg';
import orderCart from '../../img/orderCart.svg';


const Drawer = () => {

    return (
        <div className={'overlay'}>
            <div className={'drawer'}>
                <div className={'cartTop'}>
                    <h2 className={'drawerCartName'}> Корзина
                        <button className={'closeButton'}>
                        </button>
                    </h2>
                    <div className={'cartItems'}>
                        <div className={'cartItem'}>
                            <img alt={''} src={sneakers1} className={'cartItemImg'}/>
                            <div className={'cartItemDescription'}><p className={'cartItemName'}>
                                Мужские кроссовки Nike Blazer
                            </p>
                                <b> 5 руб.</b>
                            </div>
                            <button className={'closeButton'}></button>
                        </div>
                        <div className={'cartItem'}>
                            <img alt={''} src={sneakers2} className={'cartItemImg'}/>
                            <div className={'cartItemDescription'}><p className={'cartItemName'}>
                                Мужские кроссовки Nike Blazer
                            </p>
                                <b> 5 руб.</b>
                            </div>
                            < button className={'closeButton'}/>
                        </div>
                    </div>
                </div>
                <div className={'cartBottom'}>
                    <div className={'cartBottomText'}>
                        <p>Итого:</p>
                        <b>10 руб.</b>
                    </div>
                    <div className={'cartBottomText'}>
                        <p>Налог:</p>
                        <b>1 руб.</b>
                    </div>
                    <button className={'orderButton '}><img alt={''} src={orderCart}/></button>
                </div>
            </div>
        </div>);
};

export default Drawer;