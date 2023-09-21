import React, { useContext } from 'react'
import Card from '../Card/Card'
import styles from '../MainPage/MainPage.module.scss'
import AppContext from '../common/context'

const Favourites = (props) => {
  const { onFavourite } = props
  const { favourites } = useContext(AppContext)
  return (
    <div className={styles.sneakers}>
      {favourites.map((card, index) => {
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
