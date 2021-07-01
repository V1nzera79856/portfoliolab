import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./scss/main.scss";
import {Home} from "./components/Home/Home"
import {Login} from "./components/Login/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    );
}

export default App;
