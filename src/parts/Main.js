import React from "react";
import '../App.css';

import {HashRouter, Link } from "react-router-dom";
import BooksContainer from "../parts/BooksContainer";
import EbooksContainer from "../parts/EbooksContainer"
import BorrowedContainer from "../parts/BorrowedContainer";
import WishlistContainer from "../parts/WishlistContainer";
import Footer from "./Footer";

export default function Main() {
    return(
        <>
            <HashRouter>
            <div className="content">
                <Link to="/BooksList"><BooksContainer/></Link>
                <Link to="/EbooksList"><EbooksContainer/></Link>
                <Link to="/BorrowedList"><BorrowedContainer/></Link>
                <Link to="/WishlistList"><WishlistContainer/></Link>
            </div>
            </HashRouter>
            <Footer/>
        </>
        // <>
        //     <HashRouter>
        //         <Switch>
        //                 <Route path={"/books"} component={BooksContainer} />
        //                 <Route path={"/ebooks"} component={EbooksContainer} />
        //                 <Route path={"/borrowed"} component={BorrowedContainer} />
        //                 <Route path={"/wishlist"} component={WishlistContainer} />
        //             </Switch>
        //     </HashRouter>
        // </>
    )
};


