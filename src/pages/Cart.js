import React, {useContext} from 'react'
import { ShopList } from '../Shoplist'
import { ShopContext } from '../context/shop-context'
import CartItem from '../Cart-item'
import '../Styles/Cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    let totalAmount= getTotalCartAmount()

    const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className='cartItems'>
      {ShopList.map((cartItem) => {
        if (cartItems[cartItem.id] !== 0) {
            return <CartItem
            id={cartItem.id}
            name={cartItem.name}
            image={cartItem.image}
            price={cartItem.price}
            />
        }
      })}
      </div>
      {totalAmount > 0 ?
      <div className='checkout'>
      <h3>Subtotal: GH&#8373; {totalAmount}</h3>
      <button onClick={() => navigate("/shop")}>Continue Shopping</button>
      <button>Checkout</button>
      </div>
    : <h4 className='empty'>Your Cart is Empty</h4>}
    </div>
  )
}

export default Cart 