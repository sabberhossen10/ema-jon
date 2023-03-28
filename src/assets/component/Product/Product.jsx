import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const {category,img,name,price,quantity,ratings,seller}=props.product;
  
    const handleAddToCart=props.handleAddToCart
  
    console.log('click')
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price:{price}</p>
                <p>Manufecture:{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='product-btn'>Add to Cart const element <FontAwesomeIcon icon={faStore} /></button>

        </div>
    );
};

export default Product;