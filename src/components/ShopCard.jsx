import { useNavigate } from 'react-router-dom'

function ShopCard({ item }) {
    const navigate = useNavigate()

    return (
        <div className='product-card'>
            <div className='product-id'>{item.id}</div>
            <h1 className='product-name'>{item.name}</h1>
            <img className='product-image' src={item.image} alt={item.name} />
            <p className='product-description'>{item.description}</p>
            <p className='product-price'>{item.price}</p>
            <button className='btn' onClick={() => navigate(`/buy/${item.id}`)}>Buy</button>
        </div>
    )
}

export default ShopCard