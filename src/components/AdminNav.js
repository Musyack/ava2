import React from 'react';
import logo2 from '../resources/img/logo2.svg'
import myorders from '../resources/img/My Orders.svg'
import replenish from '../resources/img/Replenish.svg'
import toorder from '../resources/img/To order.svg'
import services from '../resources/img/Services.svg'
import settings from '../resources/img/Settings.svg'
import support from '../resources/img/Support.svg'
import logout from '../resources/img/Log out.svg'
import {Link} from "react-router-dom";
const AdminNav = () => {
    return (
        <div className="panel-nav-block">
            <div className="logo2">
                <img className="logo2" src={logo2} draggable="false"/>
            </div>
            <div className="panel-nav-ul">

                <Link to={'/admin/my-orders'}>

                    <div className="panel-nav-li">
                        <img className="logo2" src={myorders} draggable="false"/>
                        <div className="panel-nav-li-text">My Orders</div>
                    </div>

                </Link>


                <Link to={'/admin/replenish'}>
                    <div className="panel-nav-li">
                        <img className="logo2" src={replenish} draggable="false"/>
                        <div className="panel-nav-li-text">Replenish</div>
                    </div>
                </Link>



                <Link to={'/admin/order'}>
                    <div className="panel-nav-li">
                        <img className="logo2" src={toorder} draggable="false"/>
                        <div className="panel-nav-li-text main_link">To order</div>
                    </div>
                </Link>



                <Link to={'/admin/services'}>
                    <div className="panel-nav-li">
                        <img className="logo2" src={services} draggable="false"/>
                        <div className="panel-nav-li-text">Services</div>
                    </div>

                </Link>


            </div>
            <button type="submit" className="btn-logout">Log out
                <img src={logout} draggable="false"/>
            </button>
        </div>
    );
};

export default AdminNav;