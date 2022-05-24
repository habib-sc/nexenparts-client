import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    console.log(clientSecret);

    const { _id, totalPrice, email, name } = order;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null) {
            return;
        }

        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        // Setting Error 
        if(error){
            setCardError(error.message);
            setSuccess('');
        }else{
            setCardError('');
            setProcessing(true);
        }
        
        // Confirm Card Payment 
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
        );

        if(intentError) {
            setCardError(intentError);
            setProcessing(false);
        }else{
            setCardError('');
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your payment is completed.');

            // store payment and updating order 
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            };
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                setProcessing(false);
            });
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
                <button type="submit" className='btn btn-primary text-white mt-5' disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>

            {cardError &&
                <p className='text-red-500'>{cardError}</p>
            }
            {success &&
                <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className='text-orange-500 font-semibold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;