import React from 'react'
import HomeImage from '../Images/home.jpg'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import { DiscountList } from '../Discount'
import Discountitem from '../Discountitem'

function Home() {
  return (
  <div className='Homee'>  
    <div className='home' style={{ backgroundImage: `url(${HomeImage})`}}>
      <div className='item'>
        <h1>ALL YOUR GROCERY NEEDS</h1>
        <p>Shop Online and get a discount</p>
        <Link to='/shop'>
        <button>Order Now</button>
        </Link>
      </div>
    </div>

    <div className='discount'>
      <h2>Category|Discount Sale <span>upto 20% 0ff</span></h2>
      <div className='discount-items'>
        {DiscountList.map((discountItem, key) => {
          return (<Discountitem 
            key={key}
            name={discountItem.name}
            image={discountItem.image}
            price={discountItem.price}
            />
          )
        })}
      </div>
    </div>
  </div>
  )
}

export default Home
