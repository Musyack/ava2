import React from 'react';
import AdminNav from "../AdminNav";
import TotalBalance from "../TotalBalance";
import Heading from "../Heading";
import ServicesSearch from "../ServicesSearch";
import ServicesTable from "../ServicesTable";
import MyOrdersSearch from "../MyOrdersSearch";
import MyOrdersTable from "../MyOrdersTable";

const MyOrders = () => {
    return (

            <div className="sdfghj">
                <AdminNav/>
                <div className={'panel-main-block'}>
                    <TotalBalance/>
                    <div className="line"></div>
                    <Heading title={'Our Services'} name={'EGOR'}/>
                    <div className="line"></div>
                    <div className={'panel-block-containt'}>
                        <MyOrdersSearch/>
                        <MyOrdersTable/>

                    </div>
                </div>
            </div>

    );
};

export default MyOrders;