import logo from './img/logo.svg';
import profile from './img/profile.svg';
import cart from './img/cart.svg';
import sneakers1 from './img/sneakers1.jpg';
import sneakers2 from './img/sneakers2.jpg';
import sneakers3 from './img/sneakers3.jpg';
import addButton from './img/addButton.svg';
import cross from './img/cross.svg';
import orderCart from './img/orderCart.svg';
import heartUnliked from './img/heartUnliked.svg';
import searchMagnifier from './img/searchMagnifier.svg';

function App() {
    return (
        <div>
            <div className={'wrapper clear'}>
                <div className={'overlay'}>
                    <div className={'drawer'}>
                        <div className={'cartTop'}>
                            <h2 className={'drawerCartName'}> Корзина
                                <button className={'closeButton'}>
                                    <img alt={''} src={cross}/>
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
                                    <button className={'closeButton'}><img alt={''} src={cross}/></button>
                                </div>
                                <div className={'cartItem'}>
                                    <img alt={''} src={sneakers2} className={'cartItemImg'}/>
                                    <div className={'cartItemDescription'}><p className={'cartItemName'}>
                                        Мужские кроссовки Nike Blazer
                                    </p>
                                        <b> 5 руб.</b>
                                    </div>
                                    <button className={'closeButton'}><img alt={''} src={cross}/></button>
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
                </div>
                <header className={'headerAll'}>
                    <div className={'headerLeft'}>
                        <img alt={''} src={logo}/>
                        <div className={'headerInfo'}>
                            <h3 className={'reactSneakers'}>React Sneakers</h3>
                            <p className={'sneakerShop'}>Магазин кроссовок</p>
                        </div>
                    </div>
                    <ul className={'headerRight'}>
                        <li className={''}>
                            <img alt={''} src={cart}/>
                            <span className={'cartMoney'}>2673 руб.</span>
                        </li>
                        <li className={''}>
                            <img alt={''} src={profile}/>
                        </li>
                    </ul>
                </header>
                <div className={'content'}>
                    <div className={'contentUpper'}><h1>Все кроссовки</h1>
                        <div className={'search'}>
                            <img alt={'Search'} src={searchMagnifier}/>
                            <input placeholder={'Поиск...'} className={'searchInput'}/>
                        </div>
                    </div>
                    <div className={'sneakers'}>
                        <div className={'card'}>
                            <div className={'favourite'}><img src={heartUnliked} alt={'Not liked'}/></div>
                            <img width={133} height={112} alt={''} src={sneakers1}/>
                            <h5 className={'sneakerDescription'}>Мужские кроссовки Nike Blazer
                            </h5>
                            <div className={'cardBottom'}>
                                <div className={'cardBottomText'}>
                                    <span className={'price'}>Цена:</span>
                                    <b>5 руб.</b>
                                </div>
                                <button className={'addButton'}>
                                    <img width={25} height={25} alt={''} src={addButton}/>
                                </button>
                            </div>
                        </div>
                        <div className={'card'}>
                            <img width={133} height={112} alt={''} src={sneakers2}/>
                            <h5 className={'sneakerDescription'}>Мужские кроссовки Nike Blazer
                            </h5>
                            <div className={'cardBottom'}>
                                <div className={'cardBottomText'}>
                                    <span className={'price'}>Цена:</span>
                                    <b>5 руб.</b>
                                </div>
                                <button className={'addButton'}>
                                    <img width={25} height={25} alt={''} src={addButton}/>
                                </button>
                            </div>
                        </div>
                        <div className={'card'}>
                            <img width={133} height={112} alt={''} src={sneakers3}/>
                            <h5 className={'sneakerDescription'}>Мужские кроссовки Nike Blazer
                            </h5>
                            <div className={'cardBottom'}>
                                <div className={'cardBottomText'}>
                                    <span className={'price'}>Цена:</span>
                                    <b>5 руб.</b>
                                </div>
                                <button className={'addButton'}>
                                    <img width={25} height={25} alt={''} src={addButton}/>
                                </button>
                            </div>
                        </div>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
