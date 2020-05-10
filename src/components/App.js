import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Artist from './artist/artist';
import Browse from './artist/browse';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/artist/:id" exact component={Browse} />
                        <Route path="/artist" exact component={Artist} />
                    </div>
                </BrowserRouter>
            </div >
        )
    }

};

export default App;