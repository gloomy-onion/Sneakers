import React from 'react'
import Card from '../Card/Card'
import styles from '../MainPage/MainPage.module.scss'

const Favourites = (props) => {
  const { items, onFavourite } = props
  return (
    <div className={styles.sneakers}>
      {items.map((card, index) => {
        return (
          <Card
            key={card.id}
            {...card}
            alt={'Sneakers image'}
            favourited={true}
            onFavourite={onFavourite}
          />
        )
      })}
      <div />
    </div>
  )
}
export default Favourites
