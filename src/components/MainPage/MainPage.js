import React, { useContext, useState } from 'react'
import styles from './MainPage.module.scss'
import Card from '../Card/Card'
import SearchInput from '../Search/SearchInput'

const MainPage = (props) => {
  const { onAddToCart, onFavourite, isLoading, items, added } = props

  const [filteredItems, setFilteredItems] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const onSearch = (value) => {
    setFilteredItems(
      items.filter((card) =>
        card.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }
  const clearSearchValue = (e) => {
    setSearchValue('')
    setFilteredItems([])
    //не показыват почему то после этого items, а показывает предыдущие офильтрованные
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
    onSearch(e.target.value)
  }

  const renderItems = () => {
    const resultItems =
      !filteredItems.length && !searchValue ? items : filteredItems
    return (isLoading ? [...Array(6)] : resultItems).map((card, index) => {
      return (
        <Card
          added={added}
          key={index}
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
