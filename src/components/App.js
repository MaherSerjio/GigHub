import React from "react";
import { Router, Route } from "react-router-dom";
import history from './configuration/history';

import Header from './Shared/Header';
import Home from './Home';
import Artist from './artist/Artist';
import ArtistAlbums from './artist/ArtistAlbums';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/artist" exact component={Artist} />
                        <Route path="/artist/:id/albums" exact component={ArtistAlbums} />
                    </div>
                </Router>
            </div >
        )
    }

};

export default App;