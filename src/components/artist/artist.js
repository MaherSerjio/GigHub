import React from "react";
import axios from 'axios';

import SearchBar from "../Shared/SearchBar";
import ArtistCard from "../Shared/ArtistCard";
import Error from '../Shared/Error'
import '../styles/artist.css';

class Artist extends React.Component {
    state = { artists: null };
    token = localStorage.getItem("token");

    onSearchSubmit = async (term) => {
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

        // else token is null
    }

    render() {
        return <div>
            {this.renderBody()}
        </div>
    };

    renderBody() {

        if (this.token == null) {
            return <Error message="Please Login To your Spotify Account" />
        }
        if (this.state.artists) {
            console.log(this.state, 'State here');
            return (
                <div className="artist">
                    <div className=" d-flex justify-content-center py-5">
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.state.artists.map(artist =>
                                <div className="col" >
                                    <ArtistCard images={artist.images} authorName={artist.name} numberOfFollowers={artist.followers.total} />
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