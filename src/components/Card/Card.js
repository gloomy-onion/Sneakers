import React, { useState } from 'react'
import styles from './Card.module.scss'
import Button from '../common/Button/Button'

const Card = (props) => {
  const { image, name, price, onPlus } = props
  const [isAdded, setIsAdded] = useState()
  const [isFavourite, setIsFavourite] = useState()

  const onClickPlus = () => {
    onPlus({ image, name, price })
    setIsAdded(!isAdded)
  }
  const onFavourite = () => {
    setIsFavourite(true)
  }

  return (
    <div className={styles.card}>
      <div
        className={isFavourite ? styles.heartLiked : styles.heartUnliked}
        onClick={onFavourite}
      />
      <img alt={''} src={image} className={styles.cardImage} />
      <h5 className={styles.sneakerDescription}>{name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomText}>
          <span className={styles.price}>Цена:</span>
          <b>{price}</b>
        </div>
        <Button
          className={isAdded ? styles.tickMark : styles.addButton}
          onClick={onClickPlus}
        />
      </div>
    </div>
  )
}

export default Card
