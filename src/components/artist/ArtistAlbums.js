import React from "react";

import '../styles/artistDetails.css';


class ArtistDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-center py-5">
                    <div className="col-sm-6  input-group" >
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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1
                        </div>
                        <div className="col">
                            2
                        </div>
                        <div className="col">
                            3
                        </div>
                        <div className="col">
                            4
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default ArtistDetails;