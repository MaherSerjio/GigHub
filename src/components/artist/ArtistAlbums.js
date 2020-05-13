import React from "react";
import axios from 'axios';

import '../styles/artistDetails.css';

import Spinner from '../Shared/Spinner';
import Error from '../Shared/Error'
import AlbumCard from "../artist/AlbumCard";

class ArtistAlbums extends React.Component {
    state = { artistAlbums: null, erroMessage: null };
    IsDataFetched = false;

    token = localStorage.getItem("token");
    artistId = localStorage.getItem("artistId");
    artistName = localStorage.getItem("artistName");

    // Add Pagination to improve UX 
    render() {
        return <div>
            {this.renderBody()}
        </div>
    };

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
            })
                .then((response) => { this.setState({ artistAlbums: response.data.items }); })
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
                    </div>
                </div>
            );
        };
    }

}

export default ArtistAlbums;