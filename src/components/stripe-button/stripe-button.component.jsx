import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HS3omFUgajdfZbIq0G7pFNM1swZct4w8zjzc44RiWECnWrxA48tJbbstVIFhIKgdxdvYDt3NpMOmzDyBDLCVecf00qMbefaTy'

    const onToken = token => {
        console.log(token);
        // normally pass this to backend 
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;