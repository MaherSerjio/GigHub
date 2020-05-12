export const getStars = (popularity) => {
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

export const GetNumberOfFollowers = (followers) => {
    let numberOfFollowers = followers;

    if (followers === null) {
        numberOfFollowers = '0';
    }
    return numberOfFollowers;
};


export const GetImageUrl = (images) => {
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

