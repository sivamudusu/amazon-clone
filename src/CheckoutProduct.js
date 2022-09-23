import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './Stateprovider';


function CheckoutProduct({id,title,image,price,rating}) {
    const[{basket},dispatch] = useStateValue();


    function removeProduct(){
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
        

    }
  return (
    <div className='checkout-product'>
        <img
        className='checkoutProduct-image' 
        src={image} 
        alt=""
        />
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>{title}</p>
            <p className='checkoutProduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct-rating'>
            {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
            ))}
            </div>
            <button onClick={removeProduct} className='checkoutProduct-remove'>Remove from checkout</button>
        </div>

    </div>
  )
}

export default CheckoutProduct