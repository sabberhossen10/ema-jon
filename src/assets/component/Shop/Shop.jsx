import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='products-container'>
            {products.map(product=><Product product={product} key={product.id}></Product>)}
            </div>
            <div className='cart-container'>
            <h2>order summarys</h2>
            </div>
        </div>
    );
};

export default Shop;