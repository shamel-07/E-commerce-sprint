import React from 'react'
import { useState } from 'react'

function ProductCard({item, handleDelete, handleEdit}) {
    const [isEditing, setIsEditing] = useState(false)
    const [price, setPrice] = useState(item.price)
    const handleSave = async () => {
        await handleEdit(item.id, price)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setPrice(item.price)
        setIsEditing(false)
    }
    return (
        <div className='product-card'>
            <div className='product-id'>{item.id}</div>
            <h1 className='product-name'>{item.name}</h1>
            <img className='product-image' src={item.image} alt={item.name}/>
            <p className='product-description'>{item.description}</p>
            
            {isEditing?(
                <>
                <textarea className='input product-price-input'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <button className='btn' onClick={handleSave}>Save</button>
                <button className='btn btn-secondary' onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <p className='product-price'>{item.price}</p>
                    <button className='btn' onClick={() => setIsEditing(true)}>Edit</button>
                </>
                )
        }
            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
    )
}

export default ProductCard
