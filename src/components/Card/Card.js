import React from 'react';
import sneakers1 from '../../img/sneakers1.jpg';

const Card = () => {

    return (
        <div className={'card'}>
            <div className={'heartUnliked'}></div>
            <img width={133} height={112} alt={''} src={sneakers1}/>
            <h5 className={'sneakerDescription'}>Мужские кроссовки Nike Blazer
            </h5>
            <div className={'cardBottom'}>
                <div className={'cardBottomText'}>
                    <span className={'price'}>Цена:</span>
                    <b>5 руб.</b>
                </div>
                <button className={'addButton'}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Card;