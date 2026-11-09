import { useEffect, useState } from 'react'
import axios from 'axios'
import ShopCard from './ShopCard'

function Home() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get("https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/products")
            setProducts(response.data)
        } catch (error) {
            console.log(error, "error from fetching products")
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='products-page'>
            {products.map((item) => (
                <ShopCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Home