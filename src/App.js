import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import Favourites from './components/Favourites/Favourites'
import Header from './components/Header/Header'
import styles from './index.module.scss'
import Overlay from './components/common/Overlay/Overlay'
import Drawer from './components/Drawer/Drawer'
import AppContext from './components/common/context'

const App = (props) => {
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [favourites, setFavourites] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState([])

  React.useEffect(()=> {
    fetch('http://localhost:3000/items').then((res)=> {
      return res.json()
    }).then((res)=> {
    setItems(res)})
  }, [])

  const onAddToCart = (card) => {
    if (cartItems.find((item) => item.id === card.id)) {
      setCartItems((prevState) =>
        prevState.filter((item) => item.id !== card.id)
      )
    } else {
      setCartItems((prevState) => [...prevState, card])
    }
  }

  const onRemoveFromCart = (id) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== id))
  }

  const onAddToFavourite = (card) => {
    if (favourites.find((favCard) => favCard.id === card.id)) {
      setFavourites((prevState) =>
        prevState.filter((item) => item.id !== card.id)
      )
    } else {
      setFavourites((prevState) => [...prevState, card])
    }
  }

  const isAddedToCart = (id) => {
    return cartItems.includes((item) => item.id === id)
  }

  return (
    <AppContext.Provider value={{ cartItems, favourites, isAddedToCart }}>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header onClickCart={() => setCartOpened(true)} />
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
  )
}

export default App
