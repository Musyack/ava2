import React, {useState} from 'react';
import Header from "../Header";

const SignupForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmail = (e) => {
        setEmail(e.target.value)
    }

    const onPassword = (e) => {
        setPassword(e.target.value)
    }
    const onUsername = (e) => {
        setUsername(e.target.value)
    }



    return (
        <>
            <Header/>
            <main className="main">
                <div className="block-form">
                    <div className="form-box">
                        <div className="form-text">Sign up</div>
                        <div className="form-box-submit">
                            <div className="form-box-inputs">
                                <div className="box-inputs">
                                    <div className="container-inputs">
                                        <div className="text-input">Username</div>
                                        <input type="email" className="input" value={username} onChange={onUsername} placeholder="Enter your username"/>
                                    </div>
                                    <div className="container-inputs">
                                        <div className="text-input">Email</div>
                                        <input type="email" className="input" value={email} onChange={onEmail} placeholder="Enter your email"/>
                                    </div>

                                    <div className="container-inputs">
                                        <div className="text-input">Password</div>
                                        <input type="password" className="input" value={password} onChange={onPassword} placeholder="Enter your password"/>
                                    </div>
                                </div>
                                <a href="src/components#">
                                    <div className="reset-pass">
                                        <input type="checkbox" className="checkbox" id="checkbox_sign_up"/>
                                        <span className="cheker"></span>
                                        <label className="reset-pass" htmlFor="checkbox_sign_up">I have read and agreed
                                            with Terms of Service</label>
                                    </div>
                                </a>
                            </div>
                            <button type="submit" className="btn-sign-up">Sign up</button>
                            <div className="aller-login">These credentials do not match our record</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SignupForm;