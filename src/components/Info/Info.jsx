import React, {useContext} from 'react';
import styles from './Info.module.scss';
import AppContext from '../common/context';

const Info = (props) => {
    const {setCartOpened} = useContext(AppContext)
    const { image, title, description } = props
    return (
        <>
            <div className={styles.info}>
                <img alt={''} src={image} className={styles.infoImg} />
                <h3>{title} </h3>
                <p className={styles.description}>{description}</p>
                <button className={styles.greenButton} onClick={()=> setCartOpened(false)}>
                    Вернуться назад
                </button>
            </div>
        </>
    )
}

export default Info;