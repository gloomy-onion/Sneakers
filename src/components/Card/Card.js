import React, { useState } from 'react'
import styles from './Card.module.scss'
import Button from '../common/Button/Button'

const Card = (props) => {
  const { image, name, price, onFavourite, onPlus } = props
  const [isAdded, setIsAdded] = useState()
  const onClickPlus = () => {
    onPlus({ image, name, price })
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <div className={styles.heartUnliked} onClick={onFavourite} />
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
          onPlus={onClickPlus}
        />
      </div>
    </div>
  )
}

export default Card
