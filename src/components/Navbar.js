import React, { useState, useContext } from 'react'
import Logo from '../Images/logo.png' 
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from '../context/shop-context'




function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    const { setSearch } = useContext(ShopContext)

  return (
    <div className='Navbar' >


      <div className='Logo'>
       <Link to='/'> <img src={Logo} /> </Link>
        
       <div className='hiddenLinks'>
       <button onClick={toggleNavbar}>
       <ReorderIcon />
       </button>
       </div>
      </div>

      <div className='searchContainer'>
        <div className='searchHolder'>
          <input type='text' placeholder='Search for Grocery,Stores, Vegetables or Meat' className='search' onChange={(e) => setSearch(e.target.value)}/>
          <i><SearchIcon /></i>
        </div>
      </div>


      <div className='Links' id={openLinks ? "open" : ""}>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'><ShoppingCartIcon /></Link>
        
      </div>
    </div>
  )
}


export default Navbar
