import Card from './components/Card/Card'
import React, { useState } from 'react'
import searchMagnifier from './img/searchMagnifier.svg'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import { CARDS_INFO } from './components/constants'
import Overlay from './components/common/Overlay/Overlay'
import styles from './index.module.scss'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const onAddToCart = (card) => {
    setCartItems([...cartItems, card])
  }

  const onRemoveFromCart = (id) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id))
  }
  //так я тут нахуевертила пока пыталась сделать удаление из корзины
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div>
      <div className={styles.wrapper}>
        {cartOpened ? (
          <Overlay>
            <Drawer
              onClose={() => setCartOpened(false)}
              items={cartItems}
              onRemove={onRemoveFromCart}
            />
          </Overlay>
        ) : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className={styles.content}>
          <div className={styles.contentUpper}>
            <h1>
              {searchValue
                ? `Поиск по запросу: ${searchValue}`
                : 'Все кроссовки'}
            </h1>
            <div className={styles.search}>
              <img alt={'Search'} src={searchMagnifier} />
              <input
                placeholder={'Поиск...'}
                value={searchValue}
                className={styles.searchInput}
                onChange={onChangeSearchInput}
              />
              {searchValue && (
                <button
                  onClick={() => setSearchValue('')}
                  className={styles.clearBtn}
                />
              )}
            </div>
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
                  onPlus={(card) => onAddToCart(card)}
                />
              )
            })}
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
