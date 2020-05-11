import React from "react";
import { Router, Route } from "react-router-dom";
import history from '../history';

import Header from './Header';
import Home from './Home';
import Artist from './artist/Artist';
import ArtistDetails from './artist/ArtistDetails';
import ArtistAlbums from './artist/ArtistAlbums';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/artist" exact component={Artist} />
                        <Route path="/artist/:id" exact component={ArtistAlbums} />
                        <Route path="/artist/:id/details" exact component={ArtistDetails} />
                    </div>
                </Router>
            </div >
        )
    }

};

export default App;