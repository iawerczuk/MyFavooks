import React, { useState } from "react";

import borrowedImg from "../images/borrow.png";
import {Link} from "react-router-dom";
export default function EbooksList() {
    const [book, setBook]=useState();

    return(
        <>
            <div className="main">
            <Link to="/BorrowedList">
                <div className="borrowed container">
                    <img src={borrowedImg} alt="wypożyczone"/>
                    <h2>wypożyczone</h2>
                    <p>zapisz, żeby nie zapomnieć</p>
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