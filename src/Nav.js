import React from "react";
import App from "./App";
import AddBook from "./AddBook";
export default function Nav() {

    return(
        <>
            <div className="nav-logo">
                <App/>
                <div className="nav">
                <AddBook/>
                <input type="text" placeholder="szukaj"/>
                </div>
            </div>
        </>
    )
};