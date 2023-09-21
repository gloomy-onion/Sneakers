import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Favourites from './components/Favourites/Favourites';
import Header from './components/Header/Header';
import styles from './index.module.scss';
import Overlay from './components/common/Overlay/Overlay';
import Drawer from './components/Drawer/Drawer';
import AppContext from './components/common/context';

const App = (props) => {
    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/items')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setItems(
                    res.map((card) => {
                        return {
                            ...card,
                            added: cartItems.includes((item) => item.id === card.id),
                        };
                    })
                );
            });
    }, []);

    const onRemoveFromCart = (id) => {
        setCartItems((prevState) => prevState.filter((item) => item.id !== id));
        setItems((prevState) =>
            prevState.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        added: false,
                    };
                } else {
                    return item;
                }
            })
        );
    };


    const isItemAddedCartFav = (arr, card) => {
        return arr.find((item) => item.id === card.id)
    }

    const getUpdatedItems = (prevState, card) => {
        return prevState.map((item) => {
            if (item.id === card.id) {
                return {
                    ...item,
                    added: true,
                };
            } else {
                return item;
            }
        });
    };

    const onAddToCart = (card) => {
        if (isItemAddedCartFav(cartItems, card)) {
            onRemoveFromCart(card.id);
        } else {
            // try catch добавить
            fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({id: card.id})
            })
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    if (json.status === 'success') {
                        setCartItems((prevState) => [...prevState, card]);
                        setItems((prevState) =>
                            getUpdatedItems(prevState, card, true || false)
                        );
                    }
                }).catch((error) => {
                console.error('kakoy to error', error);
            });
        }
    };

    const onAddToFavourite = (card) => {
        try {
            if (isItemAddedCartFav(favourites, card)) {
                setFavourites((prevState) =>
                    prevState.filter((item) => item.id !== card.id)
                );
            } else {
                setFavourites((prevState) => [...prevState, card]);
            }
        } catch (error) {
            alert('Не удалось добавить в закладки');
        }
    };

    return (
        <AppContext.Provider value={{cartItems, favourites, setCartOpened}}>
            <BrowserRouter>
                <div className={styles.wrapper}>
                    <Header onClickCart={() => setCartOpened(true)}/>
                    <div>
                        {cartOpened && (
                            <Overlay>
                                <Drawer
                                    onClose={() => setCartOpened(false)}
                                    items={cartItems}
                                    onRemove={onRemoveFromCart}
                                />
                            </Overlay>
                        )}{' '}
                    </div>
                    <Routes>
                        <Route
                            path={'/favourites'}
                            exact={true}
                            element={
                                <Favourites
                                    items={favourites}
                                    onFavourite={(card) => onAddToFavourite(card)}
                                />
                            }
                        />
                        <Route
                            path={'/'}
                            exact={true}
                            element={
                                <MainPage
                                    items={items}
                                    cartItems={cartItems}
                                    isLoading={isLoading}
                                    onAddToCart={onAddToCart}
                                    onFavourite={(card) => onAddToFavourite(card)}
                                />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
