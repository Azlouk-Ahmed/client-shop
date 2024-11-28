
import { useContext } from "react"
import { HoneyContext } from "../context/HoneyContext"

export const useHoneyContext = () => {
  const context = useContext(HoneyContext)

  if(!context) {
    throw Error('usehoneyContext must be used inside a honeyContextProvider')
  }

  return context
}