import Card from './components/Card/Card'
import React, { useState } from 'react'
import searchMagnifier from './img/searchMagnifier.svg'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import { CARDS_INFO } from './components/constants'
import Overlay from './components/common/Overlay/Overlay'

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const onAddToCart = (card) => {
    setCartItems([...cartItems, card])
  }

  return (
    <div>
      <div className={'wrapper clear'}>
        {cartOpened ? (
          <Overlay>
            <Drawer onClose={() => setCartOpened(false)} items={cartItems} />
          </Overlay>
        ) : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className={'content'}>
          <div className={'contentUpper'}>
            <h1>Все кроссовки</h1>
            <div className={'search'}>
              <img alt={'Search'} src={searchMagnifier} />
              <input placeholder={'Поиск...'} className={'searchInput'} />
            </div>
          </div>
          <div className={'sneakers'}>
            {CARDS_INFO.map((card, index) => {
              return (
                <Card
                  key={index}
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
