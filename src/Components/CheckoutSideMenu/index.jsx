import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context'

import {XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'

import totalPrice from '../../Utils'


function CheckoutSideMenu() {
  const {
    showCheckoutMenu,
    closeCheckoutMenu,
    cartProducts, 
    setCartProducts,
    setCount,
    order, 
    setOrder
  } = React.useContext(CartContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product =>
       product.id != id
    );
    setCartProducts(filteredProducts);
    setCount(state => state-1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().getDate,
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd])
    setCartProducts([])
    setCount(0)
  }
  
  return (
    <aside className={`${!showCheckoutMenu ? 'w-0 h-0 border-none': 'w-[360px] h-[calc(100%-200px)]'} 
    flex flex-col fixed right-0 border bg-white border-black rounded-lg  transition-all `}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          My Order
        </h2>
        <div onClick={() => closeCheckoutMenu()}
          className='cursor-pointer'>
          <XMarkIcon className='h-6 w-6 text-black '/>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          cartProducts.map((product) => (
            <OrderCard 
              key = {product.id}
              id = {product.id}
              title = {product.title} 
              image = {product.image}
              price = {product.price}
              handleDelete = {handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 mb-3'>
        <p className='flex justify-between items-center mb-2 mt-2'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
        <button className='w-full bg-black rounded-lg py-3 text-white'
          onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
        
      </div>
    </aside>
  )
}

export default CheckoutSideMenu