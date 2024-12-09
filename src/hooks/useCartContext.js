
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const useCartContext = () => {
  const context = useContext(CartContext)

  if(!context) {
    throw Error('cartContext must be used inside a cartContextProvider')
  }

  return context
}