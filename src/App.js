import React from 'react';
import Header from "./components/Header";
import LoginForm from "./components/pages/LoginForm";
import InfoPage from "./components/pages/InfoPage";
import {Route, Routes} from "react-router-dom";
import SignupForm from "./components/pages/SignupForm";
import Services from "./components/pages/Services";
import MyOrders from "./components/pages/MyOrders";
import Replenish from "./components/pages/Replenish";
import Payment from "./components/Payment";
import ToOrder from "./components/pages/ToOrder";

const App = () => {
    return (
        <Routes>

            <Route index element={<InfoPage/>}/>
            <Route path={'/login'} element={<LoginForm/>} />
            <Route path={'/signup'} element={<SignupForm/>} />
            <Route path={'/admin/services'} element={<Services/>} />
            <Route path={'/admin/my-orders'} element={<MyOrders/>}/>
            <Route path={'/admin/replenish'} element={<Replenish/>}/>
            <Route path={'/admin/order'} element={<ToOrder/>}/>

        </Routes>
    );
};

export default App;