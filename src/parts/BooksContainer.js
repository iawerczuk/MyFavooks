import React from "react";
import { Link } from 'react-router-dom';
import bookImg from "../images/books.svg"

export default function BooksContainer() {

    return(
        <div className="main">
            <div className="books container">
                <Link to="/BooksList"><img src={bookImg} alt="książki"/></Link>
                <h2>książki</h2>
                <p>sprawdź, co już masz na papierze</p>
            </div>
        </div>
    )
};