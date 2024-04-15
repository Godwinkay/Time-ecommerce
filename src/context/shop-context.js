import React from 'react'
import { useState, createContext } from 'react'
import { ShopList } from '../Shoplist'
import Shopitem from '../Shopitem'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < ShopList.length + 1; i++) {
        cart[i] = 0;
    }
    return cart; 
}

function ShopContextProvider(props) {

const [cartItems, setCartItems] = useState(getDefaultCart())

const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }) )
}

const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }) )
}

const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount}))
}

const [search, setSearch] = useState('')

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = ShopList.find((cartItem) => cartItem.id === Number(item))
            totalAmount += cartItems[item] * itemInfo.price
        }
    }
    return totalAmount
}

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, search, setSearch}


  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
