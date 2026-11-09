import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/products",
            {name, price, description, image})
            navigate('/')
        } catch (error) {
            console.log(error, "error from creating product")
        }
    }

    return (
        <form className='product-form' onSubmit={handelSubmit}>
            <input className='input' type="text"
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input className='input' type="number"
                placeholder='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <input className='input' type="text"
                placeholder='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input className='input' type='text'
                placeholder='image URL here'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
            />
            <button className='form-submit' type="submit">Create</button>
        </form>
    )
}

export default CreateProduct
