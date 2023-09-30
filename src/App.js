import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import Favourites from './components/Favourites/Favourites'
import Header from './components/Header/Header'
import styles from './index.module.scss'
import Overlay from './components/common/Overlay/Overlay'
import Drawer from './components/Drawer/Drawer'
import AppContext from './components/common/context'
import axios from 'axios'
import { isItemAddedCartFav } from './../src/components/common/helpers'

const App = (props) => {
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [favourites, setFavourites] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/items').then((res) => {
      setItems(
        res.data.map((card) => {
          return {
            ...card,
            added: cartItems.includes((item) => item.id === card.id),
          }
        })
      )
    })
  }, [])

  const onClickAddToCart = (card) => {
    axios.post('http://localhost:3000/cart', card).then((json) => {
      setCartItems((prevState) => [...prevState, card])
      setItems((prevState) => getUpdatedItems(prevState, card, true))
    })
  }

  const onRemoveFromCart = (card) => {
    axios.delete('http://localhost:3000/cart').then((json) => {
      setCartItems((prevState) => {
        return prevState.filter((item) => item.id !== card.id)
      })
      setItems((prevState) => getUpdatedItems(prevState, card, false))
    })

    //блин ну может я тупица вообще последняя, но при открытии корзины он сам отрабатывает
    //без нажатия кнопок, при этом если я переношу axios.delete в функцию onAddToCart он отрабатывает нормально

    // fetch('http://localhost:3000/cart', {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8',
    //     },
    //     body: JSON.stringify({id: card.id}),
    // })
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((json) => {
    //         if (json.status === 'success') {
    //             setCartItems((prevState) => {
    //                 return prevState.filter((item) => item.id !== card.id);
    //             });
    //             setItems((prevState) => getUpdatedItems(prevState, card, false));
    //         }
    //     });
  }

  const getUpdatedItems = (prevState, card, added) => {
    return prevState.map((item) => {
      if (item.id === card.id) {
        return {
          ...item,
          added,
        }
      } else {
        return item
      }
    })
  }

  const onAddToCart = (card) => {
    try {
      if (isItemAddedCartFav(cartItems, card)) {
        onRemoveFromCart(card)
      } else {
        onClickAddToCart(card)

        // fetch('http://localhost:3000/cart', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8',
        //     },
        //     body: JSON.stringify({id: card.id}),
        // })
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((json) => {
        //         if (json.status === 'success') {
        //             setCartItems((prevState) => [...prevState, card]);
        //             setItems((prevState) => getUpdatedItems(prevState, card, true));
        //         }
        //     });
      }
    } catch (error) {
      console.error('kakoy to error', error)
    }
  }

  const onAddToFavourite = (card) => {
    try {
      if (isItemAddedCartFav(favourites, card)) {
        setFavourites((prevState) =>
          prevState.filter((item) => item.id !== card.id)
        )
      } else {
        setFavourites((prevState) => [...prevState, card])
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
  }

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favourites,
        setCartOpened,
        setCartItems,
        onRemoveFromCart,
        onAddToFavourite,
        onAddToCart,
        isLoading,
        items,
      }}
    >
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <div>
            {cartOpened && (
              <Overlay>
                <Drawer />
              </Overlay>
            )}{' '}
          </div>
          <Routes>
            <Route path={'/favourites'} exact={true} element={<Favourites />} />
            <Route path={'/'} exact={true} element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
