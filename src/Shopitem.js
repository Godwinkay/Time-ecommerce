import React from 'react'
import { ShopContext } from './context/shop-context'
import { useContext } from 'react'

function Shopitem({ id, image, name, price, category }) {

  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
    
    return (
      <div className='shopItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h2>{name}</h2>
        <p>GH&#8373; {price}</p>
        <div>
        <button onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
        </div>
    )
}

export default Shopitem
