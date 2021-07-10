import React from "react";
import { Link } from 'react-router-dom';

import heartImg from "../images/heart.png"

export default function WishlistContainer() {

    return(
        <div className="main">
            <div className="wishlist container">
                <Link to="/Wishlist"><img src={heartImg} alt="wishlist"/></Link>
                <h2>wishlist</h2>
                <p>zapamiętaj, co chcesz kupić</p>
            </div>
        </div>
    )
};