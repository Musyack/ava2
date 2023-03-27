import React from 'react';

const OrderForm = () => {
    return (
        <div className="order-block">
            <div className="form-order">




                <div className="container-inputs">
                    <div className="text-input">Link</div>
                    <input type="text" className="input" id="input_order" placeholder="youtube.com/g5Thjk..."/>
                </div>
                <div className="container-inputs">
                    <div className="text-input">Time (min)</div>
                    <input type="number" className="input" id="input_order" placeholder="30"/>
                </div>
                <div className="container-inputs">
                    <div className="text-input">Quantity</div>
                    <input type="text" className="input" id="input_order" placeholder="1234"/>
                        <div className="input-txt">Min: 10000 - Max: 2147483647</div>
                </div>
                <div className="container-inputs">
                    <div className="text-input">Total Price</div>
                    <input type="text" className="input" id="input_order" placeholder="" disabled={'true'}/>

                </div>



                <button type="submit" className="btn-Change-Email">Start cheating now!</button>





            </div>

        </div>
    );
};

export default OrderForm;