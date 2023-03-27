import React, {useState} from 'react';
import searchpic from '../resources/img/search.svg'
const MyOrdersSearch = () => {

    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="block-search">
            <div className="search">
                <img className="" src={searchpic} draggable="false"/>
                <input type="text" value={search} onChange={onSearch} placeholder={"Transaction Search"} className="input-search"/>
            </div>

        </div>
    );
};

export default MyOrdersSearch;