import React, { useState } from "react";

import SortAZ from "../actions/SortAZ";
import SortZA from "../actions/SortZA";
import borrow from "../images/borrow.png"
import Trash from "../actions/Trash";
import {Link} from "react-router-dom";
import ebookImg from "../images/kindle.png";

export default function BorrowedList() {
    const [book, setBook]=useState();

    return(
        <>
            <div className="main">
                <Link to="/EbooksList">
                    <div className="books container">
                        <img src={ebookImg} alt="ebooki"/>
                        <h2>ebooki</h2>
                        <p>sprawdź, co już masz na kindlu</p>
                    </div>
                </Link>
            </div>
            <div>
                <ul>
                    {book?.filter(el => el.borrowed).map(item => (
                        <li>{item}</li>
                    ))}
                    <button >usuń</button>
                </ul>
            </div>

            </>
            )
            };