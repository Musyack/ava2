import React from 'react';

const Filters = () => {
    return (
        <div className="filters-box">
            <div className="filter-item active">
                <div className="filter-item-name active">All</div>
                <div className="filter-item-quantity" id="">20</div>
            </div>
            <div className="filter-item ">
                <div className="filter-item-name ">Waiting</div>
                <div className="filter-item-quantity" id="active-filter">20</div>
            </div>
            <div className="filter-item ">
                <div className="filter-item-name ">Active</div>
                <div className="filter-item-quantity" id="active-filter">20</div>
            </div>
            <div className="filter-item ">
                <div className="filter-item-name ">Completed</div>
                <div className="filter-item-quantity" id="active-filter">20</div>
            </div>
        </div>
    );
};

export default Filters;