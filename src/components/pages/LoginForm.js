import React, {useState} from 'react';
import Header from "../Header";

const LoginForm = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmail = (e) => {
        setEmail(e.target.value)
    }

    const onPassword = (e) => {
        setPassword(e.target.value)
    }

    return (

        <>
            <Header/>
            <div className="block-form">
                <div className="form-box">
                    <div className="form-text">Login</div>
                    <div className="form-box-submit">
                        <div className="form-box-inputs">
                            <div className="box-inputs">
                                <div className="container-inputs">
                                    <div className="text-input">Email</div>
                                    <input type="email" onChange={onEmail} className="input" value={email} placeholder="Enter your email"/>
                                </div>

                                <div className="container-inputs">
                                    <div className="text-input">Password</div>
                                    <input type="password" onChange={onPassword} className="input" value={password} placeholder="Enter your password"/>
                                </div>

                            </div>
                            <a href="src/components#">
                                <div className="reset-pass">Forgot your password?</div>
                            </a>
                        </div>
                        <button type="submit" className="btn-login">Login your account</button>
                        <div className="aller-login">These credentials do not match our record</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;