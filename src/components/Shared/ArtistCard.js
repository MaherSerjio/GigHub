import React from 'react';
import { GetImageUrl, GetNumberOfFollowers, getStars } from './Helper';
import '../styles/artistCard.css';

const ArtistCard = (props) => {
    const imageUrl = GetImageUrl(props.images);
    const numberOfFollowers = GetNumberOfFollowers(props.numberOfFollowers);
    const stars = getStars(props.popularity);

    return (
        <div className="card text-white bg-dark mb-5" style={{ width: "14rem" }}>
            <img className="card-img-top img-responsive" src={imageUrl} alt={props.authorName} ></img>
            <div className="card-body">
                <h5 className="card-title">{props.authorName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{numberOfFollowers} followers</h6>
                <p className="card-text mt-4 ">
                    {
                        stars.map((star, i) => {
                            { return < i key={i} className="fa fa-star"></i> }
                        })
                    }
                </p>
            </div>
        </div >
    );
};


export default ArtistCard;

