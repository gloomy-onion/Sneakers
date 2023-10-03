import { useContext } from 'react'
import AppContext from './context'

export const useCart = () => {
  const { setCartItems, cartItems } = useContext(AppContext)
  const totalPrice = cartItems.reduce((sum, card) => card.price + sum, 0)

  return {
    cartItems,
    setCartItems,
    totalPrice,
  }
}
