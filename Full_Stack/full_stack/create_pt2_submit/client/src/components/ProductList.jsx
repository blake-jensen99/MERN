import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    console.log(props, "list")
  return (
    <div>
        <h1>All Products:</h1>
        {
            props.products.products && 
            props.products.products.map( (product, i) => {
                return (
                    <div>
                        <Link to={`/product/${product._id}`}><h1 key={i}>{product.title}</h1></Link>
                    </div>
                )
                })
        }
    </div>
  )
}

export default ProductList