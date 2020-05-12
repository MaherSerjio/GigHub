import React from "react";
import axios from 'axios';
import history from '../../history';

import SearchBar from "../Shared/SearchBar";
import ArtistCard from "../Shared/ArtistCard";
import Spinner from '../Shared/Spinner';
import Error from '../Shared/Error'
import '../styles/artist.css';

class Artist extends React.Component {
    state = { artists: null, isLoading: null, errorMessage: null };

    token = localStorage.getItem("token");
    term = localStorage.getItem("term");

    goToArtistAlbums = (artistId) => {
        localStorage.setItem("artistId", artistId);
        history.push("/artist/" + artistId + "/albums");
    }

    componentDidMount() {
        if (this.token != null && this.term != null && this.state.artists == null)
            this.GetSearchResult(this.term);
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

            this.setState({ isLoading: true });
            await axios.get("https://api.spotify.com/v1/search", {
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
            }).then((response) => {
                this.setState({ isLoading: false });
                this.setState({ artists: response.data.artists.items });
            })
                .catch((err) => {
                    this.setState({ isLoading: false });
                    this.setState({ errorMessage: err.message });
                })
        }

    }

    renderBody() {


        if (this.token == null) {
            return <Error message="Please Login To your Spotify Account" />
        }
        if (this.state.errorMessage)
            return <Error message={this.errorMessage} />

        if (this.state.isLoading)
            return <Spinner message="Fetching your data ..." />;

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