import React, {useContext} from 'react'
import { ShopContext } from './context/shop-context'

function CartItem ({ id, image, name, price }) {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
  return (
    <div className='cartItem'>
     <img src={image} />
    <div className='description'>
     <h2>{name}</h2>
    <p>GH&#8373; {price}</p>
    <div className='countHandler'>
        <button onClick={() => removeFromCart(id)}>-</button>
        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
        <button onClick={() => addToCart(id)}>+</button>
    </div>
    </div>
    </div>
  )
}

export default CartItem
