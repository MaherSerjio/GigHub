import React from "react";
import { Router, Route } from "react-router-dom";
import history from '../history';

import Header from './Header';
import Home from './Home';
import Artist from './artist/Artist';
import ArtistDetails from './artist/ArtistDetails';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/artist" exact component={Artist} />
                        <Route path="/artist/:id" exact component={Artist} />
                        <Route path="/artist/:id/details" exact component={ArtistDetails} />
                    </div>
                </Router>
            </div >
        )
    }

};

export default App;