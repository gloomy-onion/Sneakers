import React from 'react'
import logo from '../../img/logo.svg'
import cart from '../../img/cart.svg'
import profile from '../../img/profile.svg'

const Header = (props) => {
  const { onClickCart } = props
  return (
    <header className={'headerAll'}>
      <div className={'headerLeft'}>
        <img alt={''} src={logo} />
        <div className={'headerInfo'}>
          <h3 className={'reactSneakers'}>React Sneakers</h3>
          <p className={'sneakerShop'}>Магазин кроссовок</p>
        </div>
      </div>
      <ul className={'headerRight'}>
        <li className={'cartImg'} onClick={onClickCart}>
          <img alt={''} src={cart} />
          <span className={'cartMoney'}>2673 руб.</span>
        </li>
        <li className={''}>
          <img alt={''} src={profile} />
        </li>
      </ul>
    </header>
  )
}

export default Header
