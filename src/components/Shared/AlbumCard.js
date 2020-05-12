import React from 'react';
import { GetImageUrl } from './Helper';

import '../styles/albumCard.css';

const AlbumCard = (props) => {
    const imageUrl = GetImageUrl(props.images);
    const previewUrl = props.previewUrls.spotify;

    return (
        <div className="card text-white bg-dark mb-5" style={{ width: "14rem" }}>
            <img className="card-img-top img-responsive" src={imageUrl} alt="Card  cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.albumName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.authorName}</h6>
                <p className="card-text text-muted mt-4">
                    {props.albumRealeaseDate}
                    <span className="card-text text-muted d-block">
                        {props.numberOfTracks} tracks
                </span>
                </p>
                <div className="card-footer text-center">
                    <a href={previewUrl} target="_blank" className="text-white">Preview on Spotify</a>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;

