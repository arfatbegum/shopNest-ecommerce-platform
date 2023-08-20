import React from 'react';

const ShippingPolicy = () => {
    return (
        <div>
          <h1 className='text-lg font-bold mb-2'>Shipping Policy</h1>
            At SHOPPABLE, we strive to provide a seamless shopping experience for our valued customers. Please take a moment to review our shipping policy to understand how we handle the delivery of your orders.
            <h1 className='text-lg font-bold my-2'>Processing Time</h1> 
            Orders are typically processed within 7 business days after payment confirmation. <br/>
            During peak seasons or promotions, processing times may be slightly extended, and we appreciate your patience.        
            <h1 className='text-lg font-bold my-2'>Shipping Methods</h1>
            <p>
            We offer a range of shipping options, including standard and expedited delivery.
            </p>
            Shipping costs are calculated based on the weight, dimensions, and destination of your order.         
            <h1 className='text-lg font-bold my-2'>Estimated Delivery Times</h1>
            Standard Shipping: 7 to 10 business days<br/>
            Expedited Shipping: 7 to 15 business days<br/>
            Please note that delivery times are estimates and may vary due to factors beyond our control, such as weather conditions, customs delays, or carrier-related issues.
            <h1 className='text-lg font-bold my-2'>Tracking Information</h1>
            Once your order is shipped, you will receive a confirmation email with a tracking number.<br/>
            You can track the progress of your order through our website or the carrier's tracking portal.
            <h1 className='text-lg font-bold my-2'>Shipping Restrictions</h1>
            Currently, we only offer shipping within [Country/Countries].<br/>
            Unfortunately, we do not ship to P.O. boxes or APO/FPO addresses.
            <h1 className='text-lg font-bold my-2'>International Shipping</h1>
            For international orders, please be aware that customs duties, taxes, or fees may apply upon arrival in your country. These charges are the responsibility of the customer.
            <h1 className='text-lg font-bold my-2'>Order Modifications</h1>
            If you need to make changes to your shipping address or order details after placing an order, please contact our customer support team within [X] hours. We will do our best to accommodate your request if the order has not yet been shipped.
        </div>
    );
};

export default ShippingPolicy;