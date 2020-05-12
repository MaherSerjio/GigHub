import React from 'react';

// const getStars = (numberOfFollowers) => {
//     let stars = [];
//     if (numberOfFollowers <= 999)
//         stars.push(1);
//     else if (numberOfFollowers <= 9999)
//         stars.push(1, 2);
//     else if (numberOfFollowers <= 99999)
//         stars.push(1, 2, 3);
//     else if (numberOfFollowers <= 999999)
//         stars.push(1, 2, 3, 4);
//     else if (numberOfFollowers <= 9999999)
//         stars.push(1, 2, 3, 5);
//     return stars;

// };


const ArtistCard = (props) => {
    // const stars = getStars(props.numberOfFollowers);
    let ImagesUrls, ImageUrl;

    if (typeof props.images !== 'undefined') {
        ImagesUrls = props.images[0];
        if (typeof ImagesUrls !== 'undefined') {
            ImageUrl = ImagesUrls.url;
        } else {
            ImageUrl = "";
        }
    } else {
        ImageUrl = "";
    }

    console.log(ImagesUrls);

    return (
        <div className="card text-white bg-dark mb-5" style={{ width: "14rem" }}>
            <img className="card-img-top" src={ImageUrl} alt={props.authorName + " image "} ></img>
            <div className="card-body">
                <h5 className="card-title">{props.authorName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.numberOfFollowers} followers</h6>
                <p className="card-text mt-4 ">
                    {/* {
                        stars.map((star, i) => {
                            { return < i key={i} className="fa fa-star"></i> }
                        })
                    } */}
                </p>
            </div>
        </div >
    );
};

export default ArtistCard;

