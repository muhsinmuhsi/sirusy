import React from 'react';

const PaymentOptions = ({ handlePaymentMethodChange }) => {
  return (
    <div className="flex gap-4">
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="cod"
          onChange={(e) => handlePaymentMethodChange(e.target.value)}
        />
        Cash on Delivery
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="razorpay"
          onChange={(e) => handlePaymentMethodChange(e.target.value)}
        />
        Pay with Razorpay
      </label>
    </div>
  );
};

export default PaymentOptions;
