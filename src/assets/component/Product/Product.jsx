import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {category,img,name,price,quantity,ratings,seller}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price:{price}</p>
                <p>Manufecture:{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button className='product-btn'>Add to Cart</button>

        </div>
    );
};

export default Product;