import React from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'

import { CartContextProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import './App.css'
import Navbar from '../../Components/Navbar'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',element: <Home />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/my-orders/last',element: <MyOrder />},
    {path: '/my-account',element: <MyAccount />},
    {path: '/sign-in',element: <SignIn />},
    {path: '/*',element: <NotFound />},

  ])

  return routes
}

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
