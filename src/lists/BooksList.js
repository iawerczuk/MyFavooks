import React from "react";

import Trash from "../actions/Trash";
import SortAZ from "../actions/SortAZ";
import SortZA from "../actions/SortZA";
import bookImg from "../images/books.svg"
import starImg from "../images/star.svg"
export default function BooksList() {

    return(
        <>
            <div className="books column">
                <div className="books-img">
                    <img src={ bookImg } alt="książki"/>
                </div>
                <h1>lista książek</h1>
                <p>sprawdź, co już masz na papierze</p>
            </div>
            <div className="titles">
                <SortAZ/>
                <SortZA/>
                <ul className="title-list">
                    <li> </li>
                </ul>
            </div>
            <div className="authors">
                <SortAZ/>
                <SortZA/>
                <ul className="title-list">
                    <li> </li>
                </ul>
            </div>
            <div className="notes">
                <div className="star">
                    <img src={ starImg } alt="rekomendacje"/>
                </div>
                <ul>
                    <li> </li>
                </ul>
            </div>
            <div className="titles">
                <ul>
                    <li>
                        <div className="borrow"/>
                        <Trash/>
                    </li>
                </ul>
            </div>
        </>
    )
};