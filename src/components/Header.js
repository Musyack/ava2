import React from 'react';
import logo from '../resources/img/logo.svg'
import signup from '../resources/img/sign up.svg'
import {Link} from "react-router-dom";
const Header = () => {
    return (

            <header className="header">
                <nav className="nav">
                    <div className="nav-box">
                        <div className="logo">
                            <Link to={'/'}>
                                <img className="logo" src={logo} draggable="false"/>
                            </Link>
                        </div>

                        <div className="nav-bnt-box">
                            <Link to={'/login'}>
                                <div className="btn-Login-box">
                                    <button type="submit" className="btn-Login">Login</button>
                                </div>
                            </Link>
                            <div className="btn-Sign-box">
                                <Link to={'/signup'}>
                                    <button type="submit" className="btn-Sign">
                                        <img className="btn-Sign-img" src={signup} draggable="false"/>
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

    );
};

export default Header;