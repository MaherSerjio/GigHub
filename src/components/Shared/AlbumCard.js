import React from 'react';

const AlbumCard = (props) => {
    return (
        <div className="card text-white bg-dark mb-5" style={{ width: "14rem" }}>
            <img className="card-img-top" src={require('../../spotify.png')} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.albumName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.authorName}</h6>
                <p className="card-text text-muted mt-4">
                    {props.albumRealeaseDate}
                    <span className="card-text text-muted d-block">
                        {props.numberOfTracks} tracks
                </span>
                </p>
                <div class="card-footer text-center">
                    <a href="#" class="text-white">Preview on Spotify</a>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;

