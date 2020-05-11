import React from "react";

import SearchBar from "../Shared/SearchBar";
import ArtistCard from "../Shared/ArtistCard";
import Error from '../Shared/Error'
import '../styles/artist.css';

class Artist extends React.Component {
    token = localStorage.getItem("token");

    // We have Token and search Term Call api and get response 
    //const  token = localStorage.getItem("token") !== null ? token : null;

    onSearchSubmit(term) {
        console.log(term);
    }

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
        if (this.token == null) {
            return <Error message="Login To your Spotify Account" />
        }
        if (this.SubmitedQuery())
            return (
                <div className="artist">
                    <div className=" d-flex justify-content-center py-5">
                        <SearchBar onSubmit={this.onSearchSubmit} />
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
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div >
        );
    };
}

export default Artist;