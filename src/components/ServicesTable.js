import React from 'react';
import info from "../resources/img/info.svg"
import ItemService from "./ItemService";
const ServicesTable = () => {
    return (
        <div>
            <div className="Replenish-tabl">
                <div className="profile-name rtyuio">YouTube VHQ Live Stream</div>
                <div className="table_head">

                    <div className="table-text rowww-wight">ID</div>

                    <div className="rowww-wight2">
                        <div className="dfghj">

                            Service
                        </div>
                    </div>

                    <div className="rowww-wight3">
                        <div className="dfghj">
                            Price pay for 1000
                        </div>
                    </div>

                    <div className="rowww-wight4">
                        <div className="dfghj">
                            Min order
                        </div>
                    </div>

                    <div className="rowww-wight5">
                        <div className="dfghj">
                            Max order
                        </div>
                    </div>
                    <div className="rowww-wight6">
                        <div className="dfghj">
                            Average time
                            <img className="info" src={info} draggable="false"/>
                        </div>
                    </div>

                    <div className="rowww-wight7">
                        <div className="dfghj">
                            Description
                        </div>
                    </div>


                </div>

                <ItemService id={1} max={'50000'} min={'10000'} price={15} time={7}/>


            </div>
        </div>
    );
};

export default ServicesTable;