import React from 'react';
import path1 from '../../resources/img/path 1.svg'
import path2 from '../../resources/img/path 2.svg'
import path3 from '../../resources/img/path 3.svg'
import path4 from '../../resources/img/path 4.svg'
import Header from "../Header";
const InfoPage = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="block-block">
                    <div className="block-one">
                        <div className="text-block-1">
                            <div className="offer-one">Welcome to the best panel on сoiling YouTube services</div>
                            <div className="discription-one">Make yourself visible on the Internet with the help of various
                                SMM services that we provide!
                            </div>
                        </div>
                        <button type="submit" className="btn-Start">Start coiling!</button>
                    </div>
                    <div className="block-two-box">
                        <div className="block-two">
                            <div className="block-text">
                                <div className="text-block-2"><a name="Advantages"></a>
                                    <div className="offer-two">Our advantages</div>
                                    <div className="discription-two">Fully transparent mechanics and clear tools that
                                        provide the necessary result without risks and blockages.
                                    </div>
                                </div>
                                <button type="submit" className="btn-Reg">Registration</button>
                            </div>
                            <div className="adv-box">
                                <div className="adv-box-wrap">
                                    <div className="adv-box-wrapper">
                                        <div className="adv-content">
                                            <img src={path1} draggable="false"/>
                                            <div className="adv-content-text">
                                                <div className="adv-content-h1">High quality</div>
                                                <div className="adv-content-h2">We use our own bases for cheating,
                                                    providing the highest quality of services.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="adv-box-wrapper">
                                        <div className="adv-content">
                                            <img src={path2} draggable="false"/>
                                            <div className="adv-content-text">
                                                <div className="adv-content-h1">Quick cheat</div>
                                                <div className="adv-content-h2">The effect of using the service will not
                                                    take long. You will become more popular!
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="adv-box-wrap">
                                    <div className="adv-box-wrapper">
                                        <div className="adv-content">
                                            <img src={path2} draggable="false"/>
                                            <div className="adv-content-text">
                                                <div className="adv-content-h1">Variety of services</div>
                                                <div className="adv-content-h2">It is possible to wind up any YouTube
                                                    channel indicators on the site. From likes to coverage!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="adv-box-wrapper">
                                        <div className="adv-content">
                                            <img src={path3} draggable="false"/>
                                            <div className="adv-content-text">
                                                <div className="adv-content-h1">Support 24/7</div>
                                                <div className="adv-content-h2">Technical support specialists are happy
                                                    to answer your questions 24/7.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-three">
                    <div className="block-header">
                        <div className="offer-three">We are chosen for the quality of the cheat</div>
                        <div className="discription-three">Thousands of people using our cheat service
                            and leave only positive feedback about us
                        </div>
                    </div>

                </div>
                <a name="FAQ"></a>
                <div className="block-four">
                    <div className="block-text">
                        <div className="text-block-2">
                            <div className="offer-two">Frequently Asked <br/>Questions</div>
                            <div className="discription-two">We answered some of the most frequently asked questions<br/> on
                                our panel.</div>
                        </div>
                        <button type="submit" className="btn-Reg">Online Support</button>
                    </div>
                    <div className="block-faq">
                        <div className="faq one">
                            <div className="menu-faq">
                                <div className="faq-questoin">What are SMM panels used for?</div>
                                <div className="faq-text" style={{display: 'block'}}>SMM panels are online shops that offer
                                    different SMM services at great prices.
                                </div>
                            </div>

                            <div className="menu-faq">
                                <div className="faq-questoin">What SMM services do you sell?</div>
                                <div className="faq-text" style={{display: 'block'}}>SMM panels are online shops that offer
                                    different SMM services at great prices.
                                </div>
                            </div>

                            <div className="menu-faq">
                                <div className="faq-questoin">Is it safe to order SMM services on your panel?</div>
                                <div className="faq-text" style={{display: 'block'}}>100% safe, it won't get you banned.</div>
                            </div>

                            <div className="menu-faq">
                                <div className="faq-questoin">What does a "mass order" mean?</div>
                                <div className="faq-text" style={{display: 'block'}}>A mass order is a way for users to place
                                    separate orders with different links at once.
                                </div>
                            </div>
                            <div className="menu-faq">
                                <div className="faq-questoin">How useful is Drip-feed?</div>
                                <div className="faq-text" style={{display: 'block'}}>Imitating the organic growth for your
                                    social media accounts is easy using Drip-feed. Let's imagine you want 1000 likes on your
                                    IG post, you can either get all 1000 at once or make the process more seamless — for
                                    example, 100 likes per day for 10 days.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default InfoPage;