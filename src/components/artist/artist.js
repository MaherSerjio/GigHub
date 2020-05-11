import React from "react";

import SearchBar from "../Shared/SearchBar";
import ArtistCard from "../Shared/ArtistCard";
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
            return (
                <div className="artist">
                    <div className=" d-flex justify-content-center py-5">
                        <SearchBar />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ArtistCard authorName="Author 1" numberOfFollowers="1,000" />
                            </div>
                            <div className="col">
                                <ArtistCard authorName="Author 2" numberOfFollowers="500" />
                            </div>
                            <div className="col">
                                <ArtistCard authorName="Author 3" numberOfFollowers="1,000" />
                            </div>
                            <div className="col">
                                <ArtistCard authorName="Author 4" numberOfFollowers="100" />
                            </div>
                        </div>
                    </div>
                </div >
            );
        return (
            <div className="search--bar d-flex justify-content-center align-items-center">
                <SearchBar />
            </div >
        );
    };
}

export default Artist;