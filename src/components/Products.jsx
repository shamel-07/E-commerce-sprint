import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

function Products() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchBy, setSearchBy] = useState("name")
    const [prod, setProd] = useState([])
    const product = async () => {
        try {
            const response = await axios.get("https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/products")
            setProd(response.data)
        } catch (error) {
            console.log(error, "error from fetching data");
        }

    }
    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/products/${id}`
            )
            setProd(prod.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error, "error from deleting product");
        }
    }
    const handleEdit = async (id, price) => {
        try {
            const response = await axios.put(
                `https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/products/${id}`,
                { price }
            )
            setProd(prod.map((item) =>
                item.id === id ? response.data : item
            ))
        } catch (error) {
            console.log(error, "error from updating item")
        }
    }
    useEffect(() => {
        product();
    }, []);
    const filteredProducts = prod.filter((item) =>
        String(item[searchBy]).toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <div className='products-page'>
            <select className='input search-select' value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="id">ID</option>
            </select>

            <input className='input search-input'
                type="text"
                placeholder={`Search by ${searchBy}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredProducts.length === 0 ? (
                <p className='empty-message'>No products found</p>
            ) : (
                filteredProducts.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                ))
            )}
        </div>
    )
}

export default Products
