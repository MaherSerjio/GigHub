import React from "react";

import '../styles/artistDetails.css';


class ArtistDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="container  py-5">
                    <h2>Artist Name</h2>
                    <p>Albums</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1
                        </div>
                        <div className="col">
                            2
                        </div>
                        <div className="col">
                            3
                        </div>
                        <div className="col">
                            4
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}

export default ArtistDetails;