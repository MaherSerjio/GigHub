import React from 'react';

const Search = (props) => {
    return (
        <div className="col-sm-6 ">
            <div className="input-group" >
                <input
                    className="form-control py-2 border-right-0 border"
                    type="search"
                    placeholder="Search for an artist…" >
                </input>
                <span className="input-group-append">
                    <button
                        className="btn btn-outline-secondary border-left-0 border"
                        type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Search;