import logo from './img/logo.svg';
import profile from './img/profile.svg';
import cart from './img/cart.svg';
import sneakers1 from './img/sneakers1.jpg';
import sneakers2 from './img/sneakers2.jpg';
import sneakers3 from './img/sneakers3.jpg';
import addButton from './img/addButton.svg';

function App() {
    return (
        <div>
            <div className={'wrapper clear'}>
                <header>
                    <div className={'headerLeft'}>
                        <img alt={''} src={logo}/>
                        <div className={'headerInfo'}>
                            <h3>React Sneakers</h3>
                            <p>Магазин кроссовок</p>
                        </div>
                    </div>
                    <ul>
                        <li className={''}>
                            <img alt={''} src={cart}/>
                            <span>2673 руб.</span>
                        </li>
                        <li>
                            <img alt={''} src={profile}/>
                        </li>
                    </ul>
                </header>
                <div className={'content'}>
                    <h1>Все кроссовки</h1>
                    <div className={'sneakers'}>
                        <div className={'card'}>
                            <img width={133} height={112} alt={''} src={sneakers1}/>
                            <h5>Мужские кроссовки Nike Blazer
                            </h5>
                            <div className={'cardBottom'}>
                                <div className={'cardBottomText'}>
                                    <span>Цена:</span>
                                    <b>5 руб.</b>
                                </div>
                                <button className={'addButton'}>
                                    <img width={25} height={25} alt={''} src={addButton}/>
                                </button>
                            </div>
                        </div>
                        <div className={'card'}>
                            <img width={133} height={112} alt={''} src={sneakers2}/>
                            <h5>Мужские кроссовки Nike Blazer
                            </h5>
                            <div className={'cardBottom'}>
                                <div className={'cardBottomText'}>
                                    <span>Цена:</span>
                                    <b>5 руб.</b>
                                </div>
                                <button className={'addButton'}>
                                    <img width={25} height={25} alt={''} src={addButton}/>
                                </button>
                            </div>
                        </div>
                        <div className={'card'}>
                            <img width={133} height={112} alt={''} src={sneakers3}/>
                            <h5>Мужские кроссовки Nike Blazer
                            </h5>
                            <div className={'cardBottom'}>
                                <div className={'cardBottomText'}>
                                    <span>Цена:</span>
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
