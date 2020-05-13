import React from "react";
import axios from 'axios';

import '../styles/artistDetails.css';

import Spinner from '../Shared/Spinner';
import Error from '../Shared/Error'
import AlbumCard from "../Shared/AlbumCard";

class ArtistAlbums extends React.Component {
    state = { artistAlbums: null };
    IsDataFetched = false;

    token = localStorage.getItem("token");
    artistId = localStorage.getItem("artistId");
    artistName = localStorage.getItem("artistName");

    // Add Pagination to improve UX 

    GetArtistAlbums = async () => {
        if (this.token != null) {
            const response = await axios.get('https://api.spotify.com/v1/artists/' + this.artistId + '/albums', {
                params: {
                    offset: "0",
                    limit: "20"
                },
                headers: {
                    Authorization: "Bearer " + this.token,
                    Accept: "application/json"
                }
            });
            this.setState({ artistAlbums: response.data.items });
        }
    };

    render() {
        console.log(this.state.artistAlbums);
        return <div>
            {this.renderBody()}
        </div>
    };

    renderBody() {
        if (this.token == null) {
            return <Error message="Please Login To your Spotify Account" />
        }
        if (!this.IsDataFetched) {
            this.GetArtistAlbums();
            this.IsDataFetched = true;
            return <Spinner message="Fetching your data ..." />;
        }

        return (
            <div className="artistAlbums">
                <div className="container  py-5">
                    <h2>{this.artistName}</h2>
                    <p>Albums</p>
                </div>
                <div className="container">
                    <div className="row ">
                        {
                            this.state.artistAlbums.map(album =>
                                <div className="col" >
                                    <AlbumCard
                                        previewUrls={album.external_urls}
                                        images={album.images}
                                        albumName={album.name}
                                        authorName={album.artists[0].name}
                                        albumRealeaseDate={album.release_date}
                                        numberOfTracks={album.total_tracks}
                                    />
                                </div>)
                        }
                    </div>
                </div>
            </div>
        );
    };
}

export default ArtistAlbums;