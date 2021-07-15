import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom'
import Main from "./parts/Main";
import './App.css';
import Nav from "./parts/Nav";
import Footer from "./parts/Footer";
import BooksList from "./lists/BooksList";
import EbooksList from "./lists/EbooksList";
import AddToBooks from "./addToList/AddToBooks";
import Search from "./actions/Search";
import NotFound from "./parts/NotFound";

function App() {
    return (
        <>
        <HashRouter>
            <Nav/>
            <Switch>
                <Route exact path={"/"} component={Main} />
                <Route exact path={"/AddToBooks"} component={AddToBooks} />
                <Route exact path={"/Search"} component={Search}/>
                <Route exact path={"/BooksList"} component={BooksList} />
                <Route exact path={"/EbooksList"} component={EbooksList} />
                <Route exact path={"/BorrowedList"} component={BooksList} />
                <Route exact path={"/Wishlist"} component={BooksList} />
                <Route path={"*"} component={NotFound} />
            </Switch>
            <Footer/>
        </HashRouter>
        </>
)
}
export default App;
