import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect(()=>{
        const stortCard=getShoppingCart();
        console.log(stortCard)
    },[])
   
    const handleAddToCart=(product)=>{
        const newCard=[...cart,product]
        setCard(newCard)
        addToDb(product.id)
    }
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
            {products.map(product=><Product product={product} key={product.id}handleAddToCart={handleAddToCart}></Product>)}
            </div>
           <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;