import React, { useState } from 'react'
import styles from './Card.module.scss'
import Button from '../common/Button/Button'
import Loader from '../common/Loader'

const Card = (props) => {
  const {
    id,
    image,
    name,
    price,
    onPlus,
    favourited = false,
    onFavourite,
    loading = false,
    added,
  } = props

  const [isFavourite, setIsFavourite] = useState(favourited)

  const onClickPlus = () => {
    onPlus()
  }
  const onClickFavourite = () => {
    onFavourite({ id, name, image, price })
    setIsFavourite((prevState) => !prevState)
  }

  if (loading) return <Loader className={styles.card} />
  return (
    <div className={styles.card}>
      <div
        className={isFavourite ? styles.heartLiked : styles.heartUnliked}
        onClick={onClickFavourite}
      />
      <img alt={''} src={image} className={styles.cardImage} />
      <h5 className={styles.sneakerDescription}>{name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomText}>
          <span className={styles.price}>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <Button onClick={onClickPlus} type={added ? 'check' : 'plus'} />
      </div>
    </div>
  )
}

export default Card
