import React from "react";
import AddBook from "./AddBook";
import Trash from "./Trash";

export default function Books() {

    return(
        <>
            <div className="books column">
                <div className="books-img"/>
                <h1>lista książek</h1>
                <p>sprawdź, co już masz na papierze</p>
            </div>
            <div className="titles">
                <div className="a-z"/>
                <div className="z-a"/>
                <ul>

                </ul>
            </div><div className="authors">
            <div className="a-z"/>
            <div className="z-a"/>
            <ul>

            </ul>
        </div><div className="notes">
            <div className="star"/>
            <ul>

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