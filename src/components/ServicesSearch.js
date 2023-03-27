import React, {useState} from 'react';
import searchpic from '../resources/img/search.svg'
const MyOrdersSearch = () => {

    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="block-Replenish">
            <div className="block-search">
                <div className="search">
                    <img className="" src={searchpic} draggable="false"/>
                        <input type="text" placeholder="Order Search" value={search} onChange={setSearch} className="input-search"/>
                </div>

            </div>
            <button type="button" className="bnt-mass-order">
                Deposite funds
            </button>
        </div>
    );
};

export default MyOrdersSearch;