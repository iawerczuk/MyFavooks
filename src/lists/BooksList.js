import React, {useState } from "react";
import data from "../data/db.json";


import Trash from "../actions/Trash";

import {Link} from "react-router-dom";
import bookImg from "../images/books.svg";


export default function BooksList() {
const [book, setBook]=useState();
    return(
        <>
            <div className="main">
                <Link to="./BooksList">
                    <div className="books container">
                        <img src={bookImg} alt="książki"/>
                        <h2>książki</h2>
                        <p>sprawdź, co już masz na papierze</p>
                    </div>
                </Link>
            </div>
            <div>
                <ul>
                    {book?.filter(el => el.book).map(item => (
                        <li>{item}</li>
                        ))}
                <button >usuń</button>
                </ul>
            </div>
        </>
    )
};