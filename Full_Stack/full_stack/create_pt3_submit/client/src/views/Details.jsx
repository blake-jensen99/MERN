import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const Details = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    
    const deleteProduct = (productId) => {
      axios.delete('http://localhost:8000/api/product/' + productId)
          .then( res => {
              console.log(res)
          })
          .catch(err => console.log(err))
          navigate('/product')
  }


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res => setProduct(res.data.product))
        .catch(err => console.log(err))
    }, [])
    
    console.log(product)
  return (
    <div>
        <h1>{product.title}</h1>
        <h3>{product.price}</h3>
        <h3>{product.description}</h3>
        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
    </div>
  )
}

export default Details