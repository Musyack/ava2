import React, {useState} from 'react';
import searchpic from '../resources/img/search.svg'
import Filters from "./Filters";
const MyOrdersSearch = () => {

    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="block-search">
            <div className="search">
                <img className="" src={searchpic} draggable="false"/>
                    <input type="text" value={search} onChange={onSearch} placeholder={"Order Search"} className="input-search"/>
            </div>
            <Filters/>
            <button type="button" className="bnt-mass-order">
                Deposit funds
            </button>

        </div>
    );
};

export default MyOrdersSearch;