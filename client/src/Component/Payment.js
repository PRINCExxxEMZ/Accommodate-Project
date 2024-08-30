import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const Payment = () => {
  const publicKey = "pk_test_22fcf5175bcc5c57ad1d8f8488223c55468f06f7"; // Replace with your Paystack public key
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0); // Amount is in kobo, so 50000 is ₦500.00
  const [name, setName] = useState('');

  const componentProps = {
    email,
    amount: amount * 100, // converting to kobo
    metadata: {
      name,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Payment Successful!"),
    onClose: () => alert("Payment closed!"),
  };

  return (
    <div className="checkout">
      <h1>Paystack Checkout</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default Payment;
