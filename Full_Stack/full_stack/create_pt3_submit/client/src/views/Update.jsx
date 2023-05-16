import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
                
            })

    }, [])


    const updateProduct = e => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/product/' + id, {
            title, 
            price, 
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/product')
    }

  return (
    <div>
        <form onSubmit={updateProduct}>
            <h1>Update a Product</h1>
            <label> Title: </label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <label> Price: </label>
            <input type="number" step={0.01} value={price}  onChange={e => setPrice(e.target.value)}/>
            <label> Description: </label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Update