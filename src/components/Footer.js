import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'


function Footer() {
  return (
    <div className='Footer'>
      <div className='social'>
        <Link to='facebook.com'><i className='facebook' ><FacebookIcon /></i></Link>
        <Link to='twitter.com'><i className='twitter'><TwitterIcon /></i></Link>
        <Link to='instagram.com'><i className='instagram'><InstagramIcon /></i></Link>
      </div>
      <div className='other'>
        <div className='location'>
            <h2>Locations</h2>
            <ul>
                <li>Kumasi.Asafo Market</li>
                <li>Kaneshie Market</li>
                <li>Kotokraba Market</li>
                <li>Kasoa. Near the Interchange</li>
                <li>Galilea Market</li>
                <li>Dome Market</li>
            </ul>        
        </div>
        <div className='services'>
            <h2>Services</h2>
            <ul>
                <li>Home Delivery</li>
                <li>Wholesale</li>
                <li>Retail</li>
            </ul>        
        </div>
        <div className='category'>
            <h2>Product Category</h2>
            <ul>
                <li>Canned Foods</li>
                <li>Refrigerated Foods</li>
                <li>Fresh Foods</li>
                <li>Bottled Food Items</li>
                <li>Fruits</li>
                <li>Meat</li>
            </ul>        
        </div>
        <div className='contact'>
            <h2>Contact</h2>
            <ul>
                <li><LocalPhoneIcon /> 0300191039/0302484432</li>
                <li><EmailOutlinedIcon /> timeenterprise@gmail.com</li>
            </ul>        
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <p>Time Enterprise&copy;2024. Made with <i><FavoriteOutlinedIcon /></i> by Godwin</p>
      </div>
    </div>
  )
}

export default Footer
