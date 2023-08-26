import React from 'react'
import { CartContext } from '../../Context'

import {XMarkIcon } from '@heroicons/react/24/solid'

function CheckoutSideMenu() {
  const {
    showCheckoutMenu,
    closeCheckoutMenu,
    /* productDetails,  */
  } = React.useContext(CartContext)
  
  return (
    <aside className={`${!showCheckoutMenu && 'w-0 h-0 border-none'} flex flex-col fixed right-0 border bg-white
    border-black rounded-lg w-[360px] h-[calc(100%-100px)] transition-all`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          My Order
        </h2>
        <div onClick={() => closeCheckoutMenu()}
          className='cursor-pointer'>
          <XMarkIcon className='h-6 w-6 text-black '/>
        </div>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu