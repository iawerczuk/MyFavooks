import React from "react";
import { Link } from 'react-router-dom';
import borrowedImg from "../images/borrow.png";


export default function BorrowedContainer() {

    return(
        <div className="main">
            <div className="borrowed container">
                <Link to="/BorrowedList"><img src={borrowedImg} alt="wypożyczone"/></Link>
                <h2>wypożyczone</h2>
                <p>zapisz, żeby nie zapomnieć</p>
            </div>
        </div>
    )
};