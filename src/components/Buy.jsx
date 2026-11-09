import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Buy() {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    const getProduct = async () => {
        try {
            const response = await axios.get(`https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/products/${id}`)
            setItem(response.data)
        } catch (error) {
            console.log(error, "error from fetching product")
        }
    }

    useEffect(() => {
        getProduct()
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    if (!item) return <p className='empty-message'>Loading...</p>

    return (
        <div className='checkout-page'>
            <div className='checkout-summary'>
                <img className='checkout-image' src={item.image} alt={item.name} />
                <div>
                    <h2 className='checkout-name'>{item.name}</h2>
                    <p className='checkout-price'>{item.price}</p>
                </div>
            </div>

            <form className='checkout-form' onSubmit={handleSubmit}>
                <input className='input' type="text" placeholder='Full name' required />
                <input className='input' type="tel" placeholder='Phone number' required />
                <input className='input' type="email" placeholder='Email' required />
                <input className='input' type="text" placeholder='Location' required />
                <button className='btn form-submit' type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default Buy