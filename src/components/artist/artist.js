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

    componentDidMount() {
        if (this.token != null && this.term != null && this.state.artists == null)
            this.GetSearchResult(this.term);
    }

    render() {
        return <div>
            {this.renderBody()}
        </div>
    };

    goToArtistAlbums = (artistId, artistName) => {
        localStorage.setItem("artistId", artistId);
        localStorage.setItem("artistName", artistName);
        history.push("/artist/" + artistId + "/albums");
    }

    onSearchSubmit = async (term) => {
        localStorage.setItem("term", term);
        this.GetSearchResult(term);
    }

    GetSearchResult = async (term) => {
        // Add Pagination to improve UX 

        if (this.token != null) {
            this.setState({ isLoading: true });
            const response = await axios.get("https://api.spotify.com/v1/search", {
                params: {
                    query: term,
                    type: "artist",
                    market: "US",
                    offset: "0",
                    limit: "20"
                },
                headers: {
                    Authorization: "Bearer " + this.token,
                    Accept: "application/json"
                }
            })
                .then((response) => {
                    this.setState({ errorMessage: null });
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
        let artistsCards;

        if (this.token == null) {
            return <Error message="Please Login To your Spotify Account" />
        }
        if (this.state.errorMessage) {
            if (this.state.artists) {

                artistsCards = this.state.artists
                    .map(({ id, name, popularity, images, followers }) =>
                        <div onClick={() => this.goToArtistAlbums(id, name)} className="col" >
                            <ArtistCard
                                popularity={popularity}
                                images={images}
                                authorName={name}
                                numberOfFollowers={followers.total} />
                        </div>);
            }
            return (
                <div>
                    <Error message={this.state.errorMessage} />
                    <div className="artist">
                        <div className=" d-flex justify-content-center py-5">
                            <SearchBar onSubmit={this.onSearchSubmit} />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {artistsCards}
                        </div>
                    </div>
                </div>
            );
        }


        if (this.state.isLoading)
            return <Spinner message="Fetching your data ..." />;

        if (this.state.artists) {
            const artistsCards = this.state.artists
                .map(({ id, name, popularity, images, followers }) =>
                    <div onClick={() => this.goToArtistAlbums(id, name)} className="col" >
                        <ArtistCard
                            popularity={popularity}
                            images={images}
                            authorName={name}
                            numberOfFollowers={followers.total} />
                    </div>);
            return (
                <div className="artist">
                    <div className=" d-flex justify-content-center py-5">
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                    <div className="container">
                        <div className="row">
                            {artistsCards}
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