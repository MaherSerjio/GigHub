import React from 'react';

const ArtistCard = (props) => {
    return (
        <div className="card text-white bg-dark mb-5" style={{ width: "14rem" }}>
            <img className="card-img-top" src={require('../../spotify.png')} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.authorName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.numberOfFollowers} followers</h6>
                <p className="card-text mt-4 ">
                    <i class="fa fa-star"></i>
                    {/* Artist Popularity as Star Rating from 1>5  */}
                </p>
            </div>
        </div>
    );
};

export default ArtistCard;

