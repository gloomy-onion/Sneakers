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
    added = false,
    loading = false,
  } = props

  console.log(id, added)
  const [isAdded, setIsAdded] = useState(added)
  const [isFavourite, setIsFavourite] = useState(favourited)

  const onClickPlus = () => {
    onPlus()
    setIsAdded((prevState) => !prevState)
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
          <b>{price}</b>
        </div>
        <Button type={isAdded ? 'check' : 'plus'} onClick={onClickPlus} />
      </div>
    </div>
  )
}

export default Card
