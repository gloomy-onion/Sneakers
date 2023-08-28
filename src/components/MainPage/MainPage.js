import React from 'react'
import styles from './MainPage.module.scss'
import { CARDS_INFO } from '../constants'
import Card from '../Card/Card'
import SearchInput from '../Search/SearchInput'
import { useState } from 'react'

const MainPage = (props) => {
  const { onAddToCart, onFavourite, cartItems, isLoading } = props

  const [searchValue, setSearchValue] = useState('')

  const clearSearchValue = () => setSearchValue('')
  const onChangeSearchInput = (e) => setSearchValue(e.target.value)

  const renderItems = () => {
    const filteredItems = CARDS_INFO.filter((card) =>
      card.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (isLoading ? [...Array(6)] : filteredItems).map((card, index) => {
      return (
        <Card
          key={index}
          added={cartItems.includes((item) => item.id === card.id)}
          {...card}
          alt={'Sneakers image'}
          onFavourite={onFavourite}
          onPlus={() => onAddToCart(card)}
          loading={isLoading}
        />
      )
    })
  }

  return (
    <div className={styles.content}>
      <div className={styles.contentUpper}>
        <SearchInput
          searchValue={searchValue}
          clearSearchValue={clearSearchValue}
          onChangeSearchInput={onChangeSearchInput}
        />
      </div>
      <div className={styles.sneakers}>
        {renderItems()}
        <div />
      </div>
    </div>
  )
}
export default MainPage
