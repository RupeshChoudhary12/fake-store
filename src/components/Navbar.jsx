import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/poduct/cart/CartContext'




const Navbar = () => {


  const {cart} = useContext(CartContext)









  return (
    <nav>
<Link to={'/'}> <h1 className="logo">My.Store</h1></Link>
    <ul className="nav-links">
      <Link to={'/elctroincs'}><li className="category">Electronics</li></Link>
      <Link to={'/jewlery'}><li className="category">Jewelery</li></Link>
      <Link to={'/menclothing'}><li className="category">Men's Clothing</li></Link>
      <Link to={'/womenclothing'}><li className="category">Women's Clothing</li></Link>
      <Link to={'/cart'}><li> <button className="cart"> Cart {cart.length} </button> </li></Link>
    </ul>
</nav>
  )
}

export default Navbar
