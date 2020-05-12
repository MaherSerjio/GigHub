import React from "react";
import axios from 'axios';

import '../styles/artistDetails.css';

import Spinner from "../Shared/Spinner";
import AlbumCard from "../Shared/AlbumCard";

class ArtistAlbums extends React.Component {
    state = { artistAlbums: null };
    IsDataFetched = false;

    token = localStorage.getItem("token");
    artistId = localStorage.getItem("artistId");


    GetArtistAlbums = async () => {
        if (this.token != null) {
            const response = await axios.get('https://api.spotify.com/v1/artists/' + this.artistId + '/albums', {
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
        if (!this.IsDataFetched) {
            this.GetArtistAlbums();
            this.IsDataFetched = true;
            return <Spinner message="Please login to your spotify account" />;
        }

        return (
            <div className="artistAlbums">
                <div className="container  py-5">
                    <h2>Artist Name</h2>
                    <p>Albums</p>
                </div>
                <div className="container">
                    <div className="row ">
                        {
                            this.state.artistAlbums.map(album =>
                                <div className="col" >
                                    <AlbumCard
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