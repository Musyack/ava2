import React from 'react';

const ItemService = ({id, price, min, max, time}) => {
    return (

            <div className="ertyui">

                <div className="table-text rowww-wight">{id}</div>

                <div className="rowww-wight2">
                    <div className="dfghj">

                        YouTube Live Stream Viewers [Fast Speed] [0-5 MIN Start]
                    </div>
                </div>

                <div className="rowww-wight3">
                    <div className="dfghj">
                        {price}$
                    </div>
                </div>

                <div className="rowww-wight4">
                    <div className="dfghj">
                        {min}
                    </div>
                </div>

                <div className="rowww-wight5">
                    <div className="dfghj">
                        {max}
                    </div>
                </div>
                <div className="rowww-wight6">
                    <div className="dfghj">
                        {time} minutes
                    </div>
                </div>

                <div className="rowww-wight7">
                    <div className="dfghj">
                        <div className="look">Order</div>
                    </div>
                </div>


            </div>

    );
};

export default ItemService;