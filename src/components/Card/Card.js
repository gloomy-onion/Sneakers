import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    const {image, name, price} = props;
    return (
        <div className={styles.card}>
            <div className={styles.heartUnliked}></div>
            <img width={133} height={112} alt={''} src={image}/>
            <h5 className={styles.sneakerDescription}>{name}
            </h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardBottomText}>
                    <span className={styles.price}>Цена:</span>
                    <b>{price}</b>
                </div>
                <button className={styles.addButton}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Card;