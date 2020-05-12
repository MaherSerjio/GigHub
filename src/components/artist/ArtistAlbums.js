import React from "react";
import axios from 'axios';

import '../styles/artistDetails.css';
import AlbumCard from "../Shared/AlbumCard";

class ArtistAlbums extends React.Component {
    state = { artistAlbums: null };

    token = localStorage.getItem("token");
    artistId = localStorage.getItem("artistId");

    GetArtistAlbums = async (term) => {
        if (this.token != null) {
            const response = await axios.get('https://api.spotify.com/v1/artists/' + this.artistId + '/albums', {
                headers: {
                    Authorization: "Bearer " + this.token,
                    Accept: "application/json"
                }
            });
            //    this.setState({ albums: response.data.artists.items });
            console.log(response);
        }
    };


    render() {
        return (
            <div className="artistAlbums">
                <div className="container  py-5">
                    <h2>Artist Name</h2>
                    <p>Albums</p>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <AlbumCard albumName="Album 1" authorName="Author 1" albumRealeaseDate="2018-09-28" numberOfTracks="63" />
                        </div>
                        <div className="col">
                            <AlbumCard albumName="Album 2" authorName="Author 2" albumRealeaseDate="2016-09-02" numberOfTracks="32" />
                        </div>
                        <div className="col">
                            <AlbumCard albumName="Album 3" authorName="Author 3" albumRealeaseDate="2011-09-12" numberOfTracks="12" />
                        </div>
                        <div className="col">
                            <AlbumCard albumName="Album 4" authorName="Author 4" albumRealeaseDate="2004-09-08" numberOfTracks="30" />
                        </div>
                    </div>

                </div>

            </div>
        );
    };
}

export default ArtistAlbums;