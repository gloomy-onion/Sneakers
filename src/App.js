import Card from './components/Card/Card';
import sneakers2 from './img/sneakers2.jpg';
import sneakers3 from './img/sneakers3.jpg';
import searchMagnifier from './img/searchMagnifier.svg';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

function App() {
    return (
        <div>
            <div className={'wrapper clear'}>
                <Drawer/>
                <Header/>
                <div className={'content'}>
                    <div className={'contentUpper'}><h1>Все кроссовки</h1>
                        <div className={'search'}>
                            <img alt={'Search'} src={searchMagnifier}/>
                            <input placeholder={'Поиск...'} className={'searchInput'}/>
                        </div>
                    </div>
                    <div className={'sneakers'}>
                        <Card/>
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
                                    +
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
                                    +
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
