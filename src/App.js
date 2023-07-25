import Card from './components/Card/Card';
import searchMagnifier from './img/searchMagnifier.svg';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import {CARDS_INFO} from './components/constants';

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
                        {CARDS_INFO.map((card, index) => {
                            return (
                                <Card key={index} image={card.image} name={card.name} price={card.price}
                                      alt={'Sneakers image'}/>
                            );
                        })}
                        {/*Шок контент но он долго это объяснял и я это даже сама сделала
             */}
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
