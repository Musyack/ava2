import React from 'react';
import AdminNav from "../AdminNav";
import TotalBalance from "../TotalBalance";
import Heading from "../Heading";
import MyOrdersSearch from "../MyOrdersSearch";
import MyOrdersTable from "../MyOrdersTable";
import Payment from "../Payment";

const Replenish = () => {
    return (
        <div className="sdfghj">
            <AdminNav/>
            <div className={'panel-main-block'}>
                <TotalBalance/>
                <div className="line"></div>
                <Heading title={'Replenishment of balance'} name={'EGOR'}/>
                <div className="line"></div>
                <div className={'panel-block-containt'}>
                    <Payment/>

                </div>
            </div>
        </div>
    );
};

export default Replenish;