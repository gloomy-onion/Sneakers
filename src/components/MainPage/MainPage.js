import React, {useState} from 'react';
import styles from './MainPage.module.scss';
import Overlay from '../common/Overlay/Overlay';
import Drawer from '../Drawer/Drawer';
import Header from '../Header/Header';
import {CARDS_INFO} from '../constants';
import Card from '../Card/Card';
import SearchInput from '../Search/SearchInput';


const MainPage = (props) => {

    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    };
    const onAddToCart = (card) => {
        setCartItems((prevState) => [...prevState, card]);
    };

    const onRemoveFromCart = (id) => {
        setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
    };

    return (
        <div>
            <div className={styles.wrapper}>
                {cartOpened && (
                    <Overlay>
                        <Drawer
                            onClose={() => setCartOpened(false)}
                            items={cartItems}
                            onRemove={onRemoveFromCart}
                        />
                    </Overlay>
                )}
                <Header onClickCart={() => setCartOpened(true)}/>
                <div className={styles.content}>
                    <div className={styles.contentUpper}>
                        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput}/>
                    </div>
                    <div className={styles.sneakers}>
                        {CARDS_INFO.filter((card) =>
                            card.name.toLowerCase().includes(searchValue.toLowerCase())
                        ).map((card, index) => {
                            return (
                                <Card
                                    key={card.id}
                                    image={card.image}
                                    name={card.name}
                                    price={card.price}
                                    alt={'Sneakers image'}
                                    onFavourite={() => console.log('fav')}
                                    onPlus={() => onAddToCart(card)}
                                />
                            );
                        })}
                        <div/>
                    </div>
                </div>
            </div>
        </div>);
};
export default MainPage;