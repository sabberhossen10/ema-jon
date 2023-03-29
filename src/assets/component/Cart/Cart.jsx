import React from "react";
import "./Cart.css"

const Cart = (props) => {
  
    const cart=props.cart
    console.log(cart)
    let totalPrinc=0
    let totalShiping=0
    for(const product of cart){
        totalPrinc=totalPrinc+product.price
        totalShiping=totalShiping+product.shipping
    }
    let tex=(totalPrinc*7/100)
    let grandTotal=totalPrinc+totalShiping+tex
  return (
    <div>
      <div className="cart-container">
        <h2>order summarys</h2>
        <p>Selected Items:{cart.length}</p>
        <p>Total Price:${totalPrinc}</p>
        <p>Total Shipping:${totalShiping}</p>
        <p>Tax:${tex}</p>
        <p>Grand Total:{grandTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
