import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom'

import Main from "./parts/Main";
import './App.css';
import Nav from "./parts/Nav";
import Footer from "./parts/Footer";

function App() {
    return (
        <>
        <HashRouter>
            <Nav/>
            <Switch>
                <Route exact path={"/"} component={Main} />
            </Switch>
            <Footer/>
        </HashRouter>
        </>
)
}
export default App;
