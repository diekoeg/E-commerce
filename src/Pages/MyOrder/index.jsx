import React from 'react'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

import { CartContext } from '../../Context'

function MyOrder() {
  const {
    showCheckoutMenu,
    closeCheckoutMenu,
    cartProducts, 
    setCartProducts,
    setCount,
    order, 
    setOrder
  } = React.useContext(CartContext)

    return (
      <Layout>
         My Order
        <div className='flex flex-col w-80'>
          {
            order?.slice(-1)[0].products.map(product => (
              <OrderCard 
                key = {product.id}
                id = {product.id}
                title = {product.title} 
                image = {product.image}
                price = {product.price}
              />
            ))
          }
        </div>
      </Layout>
    )
  }
  
  export default MyOrder