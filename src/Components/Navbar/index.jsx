import React from 'react'
import NavItem from '../NavItem'
import { CartContext } from '../../Context'

import { ShoppingCartIcon} from '@heroicons/react/24/solid'

function Navbar() {
  const activeStyle = 'underline underline-offset-4'
  const {
    count,
    setCount
  } = React.useContext(CartContext)

  return (
    <nav className='flex justify-between 
        items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavItem to={'/'}
            activeStyle={activeStyle}
            >
              Shop
          </NavItem>
        </li>

        <li>
          <NavItem to={'/'}
            activeStyle={activeStyle}
            >
              All
          </NavItem>
        </li>

        <li>
          <NavItem to={'/clothes'}
            activeStyle={activeStyle}
            >
              Clothes
          </NavItem>
        </li>

        <li>
          <NavItem to={'/electronics'}
            activeStyle={activeStyle}
            >
              Electronics
          </NavItem>
        </li>

        <li>
          <NavItem to={'/furnitures'}
            activeStyle={activeStyle}
            >
              Furnitures
          </NavItem>
        </li>

        <li>
          <NavItem to={'/toys'}
            activeStyle={activeStyle}
            >
              Toys
          </NavItem>
        </li>

        <li>
          <NavItem to={'/others'}
            activeStyle={activeStyle}
            >
              Others
          </NavItem>
        </li>

      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
            Correo
        </li>

        <li>
          <NavItem to={'/my-orders'}
            activeStyle={activeStyle}
            >
              My orders
          </NavItem>
        </li>

        <li>
          <NavItem to={'/my-account'}
            activeStyle={activeStyle}
            >
              My Account
          </NavItem>
        </li>

        <li>
          <NavItem to={'/sign-in'}
            activeStyle={activeStyle}
            >
              Sign in
          </NavItem>
        </li>

        <li className='flex flex-row items-center'>
          <ShoppingCartIcon className='h-6 w-6 text-black '/>
          {count}
        </li>

      </ul>
    </nav>
  )
}

export default Navbar