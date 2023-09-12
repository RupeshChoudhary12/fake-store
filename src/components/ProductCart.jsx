import React, { useContext } from 'react'
import CartContext from '../context/poduct/cart/CartContext'

const ProductCart = ({product}) => {


  const {id , title , price , image} = product


  const {dispatch} = useContext(CartContext)


  const handleAdd = (product) => {
    dispatch({
      type : "ADD_CART",
      payload : product
    })
  }


  return (
    <div class="product">
    <img src={image} alt=""/>
    <h1>{title} </h1>
    <span>
       <h3>Price : {price}</h3> 
       <button class="add_cart"onClick={()=> handleAdd(product)} >Add to cart</button>
    </span>
</div>
  )
}

export default ProductCart
