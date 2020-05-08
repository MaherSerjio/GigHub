import React from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";

import Header from './Header';
import Login from './login';
import Search from './artist/search';
import Browse from './artist/browse';

const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
            <div>
            <Route path="/" exact component={Login}/>
            <Route path="/artist/:id" exact component={Browse}/>    
            <Route path="/search" exact component={Search}/>              
            </div>
            </BrowserRouter>
        </div>
    );
};
 
export default App;