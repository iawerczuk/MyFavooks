import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

import bookImg from "../images/book.png";
import ebookImg from "../images/kindle.png";
import borrowedImg from "../images/borrow.png";
import heartImg from "../images/heart.png";

export default function Main() {
    return(
        <>
            <div className="main">
                <Link to="/AddToBooks">
                    <div className="books container">
                        <img src={bookImg} alt="ksiązki"/>
                        <h2>książki</h2>
                        <p>dodaj lub sprawdź,<br/> co już masz na papierze</p>
                    </div>
                </Link>
                <Link to="/AddToEbooks">
                    <div className="books container">
                       <img src={ebookImg} alt="ebooki"/>
                        <h2>ebooki</h2>
                        <p>dodaj lub sprawdź,<br/> co już masz na kindlu</p>
                    </div>
                </Link>
                <Link to="/AddToBorrowed">
                    <div className="books container">
                        <img src={borrowedImg} alt="wypożyczone"/>
                        <h2>wypożyczone</h2>
                        <p>zapisz,<br/> żeby nie zapomnieć</p>
                    </div>
                </Link>
            <Link to="/AddToWishlist">
                <div className="books container">
                    <img src={heartImg} alt="wishlist"/>
                    <h2>wishlist</h2>
                    <p>zapisz,<br/> co chcesz kupić</p>
                </div>
            </Link>
            </div>
            </>
    )
};


