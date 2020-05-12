import React from "react";
import axios from 'axios';
import history from '../../history';

import SearchBar from "../Shared/SearchBar";
import ArtistCard from "../Shared/ArtistCard";
import Error from '../Shared/Error'
import '../styles/artist.css';

class Artist extends React.Component {
    state = { artists: null };
    token = localStorage.getItem("token");
    term = localStorage.getItem("term");

    goToArtistAlbums = (artistId) => {
        localStorage.setItem("artistId", artistId);
        history.push("/artist/" + artistId + "/albums");
    }

    render() {
        // console.log(this.state);
        return <div>
            {this.renderBody()}
        </div>
    };

    onSearchSubmit = async (term) => {
        localStorage.setItem("term", term);
        this.GetSearchResult(term);
    }

    GetSearchResult = async (term) => {
        if (this.token != null) {
            const response = await axios.get("https://api.spotify.com/v1/search", {
                params: {
                    query: term,
                    type: "artist",
                    market: "US",
                    offset: "0",
                    limit: "8"

                },
                headers: {
                    Authorization: "Bearer " + this.token,
                    Accept: "application/json"
                }
            });
            this.setState({ artists: response.data.artists.items });
        }
    };

    renderBody() {
        if (this.token != null && this.term)
            this.GetSearchResult(this.term);

        if (this.token == null) {
            return <Error message="Please Login To your Spotify Account" />
        }

        if (this.state.artists) {
            return (
                <div className="artist">
                    <div className=" d-flex justify-content-center py-5">
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.artists.map(artist =>
                                    <div onClick={() => this.goToArtistAlbums(artist.id)} className="col" >
                                        <ArtistCard
                                            popularity={artist.popularity}
                                            images={artist.images}
                                            authorName={artist.name}
                                            numberOfFollowers={artist.followers.total} />
                                    </div>)
                            }
                        </div>
                    </div>
                </div >
            );
        }
        return (
            <div className="search--bar d-flex justify-content-center align-items-center">
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div >
        );
    };
}

export default Artist;