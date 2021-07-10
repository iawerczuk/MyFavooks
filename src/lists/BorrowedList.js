import React from "react";

import SortAZ from "../actions/SortAZ";
import SortZA from "../actions/SortZA";
import borrow from "../images/borrow.png"
import Trash from "../actions/Trash";

export default function BorrowedList() {

    return(
        <>
            <div className="borrowed-column">
                <div className="borrowed-img">
                     <img src={borrow} alt="wypożyczone"/>
                </div>
                <h1>wypożyczone</h1>
                <p>zapisz, żeby nie zapomnieć</p>
            </div>
                <div className="titles">
                    <SortAZ/>
                    <SortZA/>
                    <ul>
                        <li> </li>
                    </ul>
                </div>
                <div className="authors">
                    <SortAZ/>
                    <SortZA/>
                    <ul>
                        <li> </li>
                    </ul>
                </div>
                <div className="notes">
                    <div className="star">
                        <img src={borrow} alt="komu"/>
                    </div>
                    <ul>
                        <li> <Trash/></li>
                    </ul>
                </div>
            </>
            )
            };