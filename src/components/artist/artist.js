import React from "react";
import Search from "../Shared/Search";

import '../styles/artist.css';

class Artist extends React.Component {
    render() {
        return (
            <div className="artist">
                <Search />
            </div >
        );
    };
}
export default Artist;