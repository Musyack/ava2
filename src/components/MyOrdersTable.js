import React from 'react';
import servicepic from '../resources/img/Service.svg'
import amountpic from '../resources/img/Amount.svg'
import linktoorder from '../resources/img/Link to order.svg'
import quantity from '../resources/img/Quantity.svg'
import statuspic from '../resources/img/Status.svg'
import datapic from '../resources/img/Data.svg'
import ItemMyOrder from "./ItemMyOrder";
const MyOrdersTable = () => {
    return (
        <div className="Replenish-tabl">

            <div className="table_head">

                <div className="table-text roww-wight">ID</div>

                <div className="roww-wight2">
                    <div className="dfghj">
                        <img className="" src={servicepic} draggable="false"/>
                            Service
                    </div>
                </div>

                <div className="roww-wight3">
                    <div className="dfghj">
                        <img className="" src={amountpic} draggable="false"/>
                            Price
                    </div>
                </div>

                <div className="roww-wight4">
                    <div className="dfghj">
                        <img className="" src={linktoorder} draggable="false"/>
                            Link to order
                    </div>
                </div>

                <div className="roww-wight5">
                    <div className="dfghj">
                        <img className="" src={quantity} draggable="false"/>
                            Quantity
                    </div>
                </div>

                <div className="roww-wight6">
                    <div className="dfghj">
                        <img className="" src={statuspic} draggable="false"/>
                            Status
                    </div>
                </div>

                <div className="roww-wight7">
                    <div className="dfghj">
                        <img className="" src={datapic} draggable="false"/>
                            Data
                    </div>
                </div>

                <div className="roww-wight8">
                    <div className="dfghj">

                    </div>
                </div>


            </div>

            <ItemMyOrder/>
        </div>
    );
};

export default MyOrdersTable;