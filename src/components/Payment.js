import React from 'react';

const Payment = () => {
    return (
        <div className="payment-block">

            <div className="container-inputs">
                <div className="text-input">Enter the deposit amount</div>
                <input type="text" className="input" id="" placeholder="Deposit amount"/>
                    <div className="input-txt">By making a payment, you agree to the terms of use of the service.</div>
            </div>

            <button type="submit" className="btn-Replenish">Replenish!</button>
        </div>
    );
};

export default Payment;