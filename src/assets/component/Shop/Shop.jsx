import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const [products,setProduct]=useState([]);
    const [cart,setCard]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
   
    const handleAddToCart=(product)=>{
        const newCard=[...cart,product]
        setCard(newCard)
    }
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
            {products.map(product=><Product product={product} key={product.id}handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className='cart-container'>
            <h2>order summarys</h2>
            <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;