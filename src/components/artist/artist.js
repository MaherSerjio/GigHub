import React from "react";

import ArtistAlbums from "./ArtistAlbums";
import '../styles/artist.css';

class Artist extends React.Component {

    render() {
        return <div>
            {this.renderBody()}
        </div>
    };

    SubmitedQuery() {
        const url = window.location.href;
        if ((url.split('artist').splice(1)[0] === '/')
            || (url.split('artist').splice(1)[0] === '')) {
            console.log(url.split('artist').splice(1)[0]);
            return false
        }
        else return true;
    }

    renderBody() {
        if (this.SubmitedQuery())
            return <ArtistAlbums />

        return (
            <div className="artist">
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
            </div >
        );
    };
}

export default Artist;