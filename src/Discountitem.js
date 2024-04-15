import React from 'react'


function Discountitem( {image, name, price} ) {
    let newPrice= Math.floor(0.8*price)
  return (
    <div className='discountItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h2>{name}</h2>
      <p>GH&#8373; {price}</p>
      <h4>GH&#8373; {newPrice}</h4>
      
    </div>
  )
}

export default Discountitem
