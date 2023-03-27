import React from 'react';
import AdminNav from "../AdminNav";
import TotalBalance from "../TotalBalance";
import Heading from "../Heading";
import MyOrdersSearch from "../MyOrdersSearch";
import MyOrdersTable from "../MyOrdersTable";
import OrderForm from "../OrderForm";

const ToOrder = () => {
    return (
        <div className="sdfghj">
            <AdminNav/>
            <div className={'panel-main-block'}>
                <TotalBalance/>
                <div className="line"></div>
                <Heading title={'Our Services'} name={'EGOR'}/>
                <div className="line"></div>
                <div className={'panel-block-containt'}>
                    <OrderForm/>
                </div>
            </div>
        </div>
    );
};

export default ToOrder;