import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './Reducer';
import "./Subtotal.css";

function Subtotal() {
    const[{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                    subtotal({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox"/> this order 
                    contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />

    <button> proceed to checkout</button>
        
    </div>
  )
}

export default Subtotal