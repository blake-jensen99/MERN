import React, {  useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8000/api/product')
      .then (res => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [removeFromDom]);

  function removeFromDom(productId) {
    // setProducts(products.filter(product => product._id != productId))
    return
  }

  return (
    <div>
        <ProductForm />
        <hr />
        { loaded && <ProductList products={products} removeFromDom = {removeFromDom}/>}
    </div>
  )
}

export default Main