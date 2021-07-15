import React from "react";
import '../App.css';

import {HashRouter, Link, Route, Switch} from "react-router-dom";

import bookImg from "../images/books.svg";
import ebookImg from "../images/kindle.png";
import borrowedImg from "../images/borrow.png";
import heartImg from "../images/heart.png";

export default function Main() {
    return(
        <>
            <div className="main">
               <Link to="/BooksList">
                   <div className="books container tooltip">
                       <span className="tooltipTxt">dodaj do listy książek</span>
                        <img src={bookImg} alt="książki"/>
                        <h2>książki</h2>
                        <p>sprawdź, co już masz na papierze</p>
                    </div>
               </Link>
                <Link to="/EbooksList">
                    <div className="books container">
                       <img src={ebookImg} alt="ebooki"/>
                        <h2>ebooki</h2>
                        <p>sprawdź, co już masz na kindlu</p>
                    </div>
                </Link>
                <Link to="/BorrowedList">
                    <div className="borrowed container">
                        <img src={borrowedImg} alt="wypożyczone"/>
                        <h2>wypożyczone</h2>
                        <p>zapisz, żeby nie zapomnieć</p>
                    </div>
                </Link>
                </div>
                 <Link to="/Wishlist">
                    <div className="wishlist container">
                        <img src={heartImg} alt="wishlist"/>
                        <h2>wishlist</h2>
                        <p>zapamiętaj, co chcesz kupić</p>
                    </div>
                </Link>
            </>
    )
};


