import React from 'react'
import {XMarkIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../Context'

function ProductDetail() {
  const {
    showProdDetail,
    closeProductDetail,
    productDetails, 
    setProductDetails
  } = React.useContext(CartContext)

  return (
    <aside className={`${!showProdDetail && 'hidden'} flex flex-col fixed right-0 border bg-white
     border-black rounded-lg w-[360px] h-[calc(100%-100px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          Item detail
        </h2>
        <div onClick={closeProductDetail}
          className='cursor-pointer'>
          <XMarkIcon className='h-6 w-6 text-black '/>
        </div>
      </div>
      <figure className='px-10'>
        <img className='w-full h-full rounded-lg' 
          src={productDetails.image} alt={productDetails.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>${productDetails.price} </span>
        <span className='font-medium text-md'>{productDetails.title}</span> 
        <span className='font-light text-sm'>{productDetails.description} </span>
      </p>
    </aside>
  )
}

export default ProductDetail