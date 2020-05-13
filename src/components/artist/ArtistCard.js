import React from 'react';
import { GetImageUrl, GetNumberOfFollowers, getStars } from '../Shared/Helper';
import '../styles/artistCard.css';

const ArtistCard = ({ images, numberOfFollowers, popularity, authorName }) => {
    const imageUrl = GetImageUrl(images);
    const totalFollowers = GetNumberOfFollowers(numberOfFollowers);
    const stars = getStars(popularity);

    return (
        <div className="card text-white bg-dark mb-5" style={{ width: "14rem" }}>
            <img className="card-img-top img-responsive"
                src={imageUrl} alt={authorName} ></img>
            <div className="card-body">
                <h5 className="card-title">{authorName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{totalFollowers} followers</h6>
                <p className="card-text mt-4 ">
                    {stars.map((star, i) => {
                        { return < i key={i} className="fa fa-star"></i> }
                    })}
                </p>
            </div>
        </div >
    );
};


export default ArtistCard;

