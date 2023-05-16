import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    // console.log(props.products.products)

    const formHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }




    return (
        <form onSubmit={formHandler}>
            <label>Title: </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <label>Price: </label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}/>
            <label>Description: </label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ProductForm