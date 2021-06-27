import React from "react";
import AddBook from "./AddBook";
export default function Nav() {

    return(
        <>
            <div className="nav-logo">
                <div className="nav">
                <AddBook/>
                <input type="text" placeholder="szukaj"/>
                </div>
            </div>
        </>
    )
};