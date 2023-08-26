import React, { useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { CartContext } from '../../Context'

function Home() {
  const [items, setItems] = React.useState(null)

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => setItems(data))
    } catch (error) {
      
    }
  }, [])

    return (
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
        </div>
        <ProductDetail/>
      </Layout>
    )
  }
  
  export default Home