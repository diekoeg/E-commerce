import React from 'react'
import { CartContext } from '../../Context'

function Card({data}) {
  const {
    count,
    setCount
  } = React.useContext(CartContext)

  return (
    <div className='bg-cyan-200 cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black 
              text-sm m-2 px-3 py-0.5'>
            {data.category}
          </span>
          <img className='w-full h-full object-cover rounded-lg'
            src={data.image} 
            alt={data.description} 
          />
          <div 
            onClick={() => setCount((state) => state+1)} 
            className='absolute top-0 right-0 flex justify-center 
            items-center bg-white rounded-full h-6 w-6'>
            +
          </div>
          <p className='flex justify-between'>
            <span className='text-sm font-light px-2 py-1 truncate'>
              {data.title}
            </span>
            <span className='text-lg font-medium px-2'>
              ${data.price}
            </span>
          </p>
      </figure>
    </div>
  )
}

export default Card