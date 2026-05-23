import { useEffect, useState } from 'react'
import API from '../services/api'
import ProductCard from 'components/ProductCard'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await API.get('/products')
    setProducts(res.data)
  }

  return (
    <div className='container'>
      <h1>Products</h1>

      <div className='grid'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home