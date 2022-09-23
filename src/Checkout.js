import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';


function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img
             className='checkout-ad'
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUyBTw5J4u3OpkQpq9DE6g2rUPcv0Vde9Nkg&usqp=CAU'
             alt=''

            />
            <div>
                <h3>helloo {user?.email.slice(0,4)}</h3>
                <h2 className='checkout-title'>
                    your shopping basket
                </h2>

                {basket?.map(item=>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                    />
                ))}          

                
                
            </div>
        </div>
        <div className='checkout-right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout