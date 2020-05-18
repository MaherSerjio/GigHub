import React from "react";
import axios from 'axios';

import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css"; // import css

import Spinner from '../Shared/Spinner';
import Error from '../Shared/Error'
import AlbumCard from "../artist/AlbumCard";

class ArtistAlbums extends React.Component {
    state = {
        artistAlbums: null, erroMessage: null,
        currentPage: 1,
        totalArtistAlbums: null
    };
    IsDataFetched = false;

    token = localStorage.getItem("token");
    artistId = localStorage.getItem("artistId");
    artistName = localStorage.getItem("artistName");

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });
        //fetch a data
        this.GetArtistAlbums(numPage - 1);
        //or update a query to get data
    };

    // Add Pagination to improve UX 
    render() {
        return <div>
            {this.renderBody()}
        </div>
    };

    GetArtistAlbums = async (offset) => {
        if (this.token != null) {
            await axios.get('https://api.spotify.com/v1/artists/' + this.artistId + '/albums', {
                params: {
                    offset: offset,
                    limit: "20"
                },
                headers: {
                    Authorization: "Bearer " + this.token,
                    Accept: "application/json"
                }
            })
                .then((response) => {
                    console.log('response', response);
                    this.setState({
                        artistAlbums: response.data.items,
                        totalArtistAlbums: response.data.total
                    });
                })
                .catch((err) => { this.setState({ erroMessage: err.message }) });
        }
    };


    renderBody() {
        if (this.state.erroMessage) {
            return <Error message={this.state.erroMessage} />
        }

        if (this.token == null) {
            return <Error message="Please Login To your Spotify Account" />
        }
        if (!this.IsDataFetched) {
            this.GetArtistAlbums();
            this.IsDataFetched = true;
            return <Spinner message="Fetching your data ..." />;
        }

        if (this.state.artistAlbums) {
            const artistAlbums = this.state.artistAlbums
                .map(({ external_urls, images, name, release_date, total_tracks, artists }) =>
                    <div className="col" >
                        <AlbumCard
                            previewUrls={external_urls}
                            images={images}
                            albumName={name}
                            authorName={artists[0].name}
                            albumRealeaseDate={release_date}
                            numberOfTracks={total_tracks}
                        />
                    </div>)

            return (
                <div className="artistAlbums">
                    <div className="container  py-5">
                        <h2>{this.artistName}</h2>
                        <p>Albums</p>
                    </div>
                    <div className="container">
                        <div className="row ">
                            {artistAlbums}
                        </div>
                        <div className="row justify-content-center">
                            <div className="row justify-content-center pb-5">
                                <Pagination
                                    totalSize={this.state.totalArtistAlbums}
                                    theme="bootstrap"
                                    currentPage={this.state.currentPage}
                                    totalPages={10}
                                    changeCurrentPage={this.changeCurrentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
    }

}

export default ArtistAlbums;