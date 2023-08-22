import React from 'react'
import styles from './MainPage.module.scss'
import { CARDS_INFO } from '../constants'
import Card from '../Card/Card'
import SearchInput from '../Search/SearchInput'

const MainPage = (props) => {
  const {
    searchValue,
    onChangeSearchInput,
    onAddToCart,
    setSearchValue,
    onFavourite,
    cartItems,
    isLoading,
  } = props

  const renderItems = () => {
      const filteredItems= CARDS_INFO.filter((card) =>
          card.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    return (isLoading ? [...Array(6)] : filteredItems)
      .map((card, index) => {
        return (
          <Card
            key={index}
            added={cartItems.some((item) => item.id === card.id)}
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
          setSearchValue={setSearchValue}
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
