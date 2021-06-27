import React from "react";
import AddBook from "./AddBook";

export default function Wishlist() {

    return(
        <>
            <div className="wishlist column">
                <button><img src="images/heart.png" alt="wishlist"/></button>
                <h1>lista książek</h1>
                <p>zapamiętaj, co chcesz kupić</p>
            </div>
        </>
    )
};