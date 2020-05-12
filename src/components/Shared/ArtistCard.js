import React from 'react';
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

/////////////Helper Methods///////////////////
const getStars = (popularity) => {
    let stars = [];
    if (popularity >= 60)
        stars.push(1, 2, 3, 4, 5);
    else if (popularity >= 50)
        stars.push(1, 2, 3, 4);
    else if (popularity >= 40)
        stars.push(1, 2, 3);
    else if (popularity >= 30)
        stars.push(1, 2);
    else
        stars.push(1);

    return stars;
};

const GetNumberOfFollowers = (followers) => {
    let numberOfFollowers = followers;

    if (followers === null) {
        numberOfFollowers = '0';
    }
    return numberOfFollowers;
};


const GetImageUrl = (images) => {
    let ImagesUrls, ImageUrl;

    if (typeof images !== 'undefined') {
        ImagesUrls = images[0];
        if (typeof ImagesUrls !== 'undefined') {
            ImageUrl = ImagesUrls.url;
        }
    } else {
        ImageUrl = "";
    }

    return ImageUrl;
};



export default ArtistCard;

