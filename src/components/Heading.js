import React from 'react';
import elips from '../resources/img/elips 1.png'
const Heading = ({title, name}) => {
    return (

            <div className="block-header-1">
                <div className="offer-page">{title}</div>
                <div className="profile-box">
                    <div className="profile-image">
                        <img className="profile-image" src={elips} draggable="false"/>
                    </div>
                    <div className="profile-name">{name}</div>
                </div>
            </div>

    );
};

export default Heading;