import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom'
import Main from "./parts/Main";
import './App.css';
import Nav from "./parts/Nav";
import Footer from "./parts/Footer";
import AddToBooks from "./addToList/AddToBooks";
import AddToEbooks from "./addToList/AddToEbooks";
import AddToBorrowed from "./addToList/AddToBorrowed";
import AddToWishlist from "./addToList/AddToWishlist";
import Search from "./actions/Search";
import NotFound from "./parts/NotFound";

function App() {
    return (
        <>
        <HashRouter>
            <Nav/>
            <Switch>
                <Route exact path={"/"} component={Main} />
                <Route exact path={"/Search"} component={Search}/>
                <Route exact path={"/AddToBooks"} component={AddToBooks} />
                <Route exact path={"/AddToEbooks"} component={AddToEbooks} />
                <Route exact path={"/AddToBorrowed"} component={AddToBorrowed} />
                <Route exact path={"/AddToWishlist"} component={AddToWishlist} />
                <Route path={"*"} component={NotFound} />
            </Switch>
            <Footer/>
        </HashRouter>
        </>
)
}
export default App;
