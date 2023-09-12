import React, { useContext, useEffect } from 'react'
import ProductCart from './ProductCart'
import ProductContext from '../context/poduct/ProductContext'
import { getProducts } from '../context/poduct/ProductAction'

const ProductContainer = () => {

  const {products , dispatch} = useContext(ProductContext)


  const fetchProducts = async() => {
    const data = await getProducts()
    dispatch({
      type : "GET_PRODUCTS",
      payload  : data
    })
    
  }

  useEffect(() => {
  

    fetchProducts()

  },[])


  if(!products) {
    return(
      <h1>LODING....</h1>
    )
  }


  return (
   
    <div class="container">

    <h1 class="all-products-title">
        All Products
    </h1>
    
    {

      products.map(product =>     <ProductCart key={product.id} product={product}/>
      )
    }   
   
  

   </div>
  )
}

export default ProductContainer
