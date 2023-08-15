import React, { useState } from 'react'
import styles from './Card.module.scss'
import Button from '../common/Button/Button'
import {getButtonStyle} from '../common/helpers';

const Card = (props) => {
  const { image, name, price, onPlus } = props
  const [isAdded, setIsAdded] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)

  const onClickPlus = () => {
    onPlus({ image, name, price })
    setIsAdded(prevState => !prevState)
  }
  const onFavourite = () => {
    setIsFavourite(prevState => !prevState)
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
