import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDom} = props

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then( res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }



  return (
    <div>
        <h1>All Products:</h1>
        {
            props.products.products && 
            props.products.products.map( (product, i) => {
                return (
                    <div>
                        <Link to={`/product/${product._id}`}><h1 key={i}>{product.title}</h1></Link>
                        <Link to={`/product/${product._id}/edit`}><button>Edit</button></Link>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
                })
        }
    </div>
  )
}

export default ProductList